# convert the model prediction result (json file) into a data.js file
# meanwhile, convert the token-level logprob into entity-level prob
# i.e., P("entity") = exp( Σ_i logprob(t_i) )
import json
import math

json_path = "/Users/reza/Desktop/OpenIE biomarker/demo/1022_233621/refined_relations.json" # the src result json file
include_prob = False # whether to include entity probabilities. # TODO: wait for correct log prob output in the json
ground_truth_biomarkers = True # whether to use ground truth biomarkers
# if true:
## use ground truth biomarkers, and all the relation can match the nodes (because all extracted relations' nodes are from ground truth biomarkers, or forced to be aligned with them)
## but the drawback is that there is no model explanation, as sll the biomarkers are human-annotated, instead of model predicted
# if false (recommended):
## use model predicted biomarkers, however, relations' nodes may not match the predicted biomarkers, so I'll display both (for example, A1, A2, A3 biomarkers, A1->B1, A2->B2 relations, both A1, A2, A3 and B1, B2 will be displayed)
## But the benifit is that biomarker can have model explanation, and it aligns with our objective --- use model to predict potential biomarkers that even human may miss
## also in real-world, there is no ground truth biomarkers, when we predict biomarkers and predict the relation based on the predicted biomarkers, there will be no issues (e.g., predict A1, A2, A3 biomarkers, then relations must be among A1, A2, A3) 

js_output_path = "data.js"

def safe_explanation(entity):
    exp = entity.get('explanation') or ""
    # 防止 explanation 是 None
    return exp.replace('\n', ' ').replace('"', '\\"')

with open(json_path, 'r', encoding='utf-8') as fin:
    papers = json.load(fin)

output = []

for paper in papers:
    title = f'Paper {paper.get("id", "")}'
    pid = paper.get("id", "")
    refined_relations = paper.get("refined_relations", []) or []
    if ground_truth_biomarkers:
        biomarkers = paper.get("annotation_biomarkers", []) or []
        js_biomarkers = []
        for b in biomarkers:
            js_biomarkers.append({
                "type": "None",
                "name": b,
                "explanation": "None"
            })
    else:
        biomarkers = paper.get("biomarkers", []) or []
        # 如果没有refined_relations，也要生成节点信息
        js_biomarkers = []
        for b in biomarkers:
            js_biomarkers.append({
                "type": b.get("type", ""),
                "name": b.get("name", ""),
                "explanation": safe_explanation(b)
            })
    # biomarker_logprobs = paper.get("biomarkers_logprobs", {}) or {}
    # 先处理 refined_relations
    js_relations = []
    for r in refined_relations:
        cause = r["cause"]
        effect = r["effect"]
        js_relations.append({
            "cause": {
                "type": cause.get("type", ""),
                "name": cause.get("name", ""),
                "explanation": safe_explanation(cause)
            },
            "effect": {
                "type": effect.get("type", ""),
                "name": effect.get("name", ""),
                "explanation": safe_explanation(effect)
            },
            "evidence_phrase": r.get("evidence_phrase", "")
        })
    
    
    # process the biomarker's token-level logprobs into entity-level prob
    # if include_prob:
    #     logprobs = []
    #     for token in biomarker_logprobs["content"]:
    #         tk_lgprob = token["logprob"]
    #         logprobs.append(tk_lgprob)
    #     total_logprob = sum(logprobs)
    #     # get the overall confidence
    #     confidence = math.exp(total_logprob)

    output.append({
        "id": pid,
        "title": title,
        "refined_relations": js_relations,
        "biomarkers": js_biomarkers,  # 新加，便于无关系时展示节点
    })

# 写入 data.js
with open(js_output_path, "w", encoding="utf-8") as fout:
    fout.write("export const PAPERS = ")
    json.dump(output, fout, indent=2, ensure_ascii=False)
    fout.write(";")