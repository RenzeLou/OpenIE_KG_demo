0. `npm install react vis-network`
1. run the `convert_json_to_js.py` to convert the model prediction result (json file) into a data.js file
   meanwhile, convert the token-level logprob into entity-level prob
   i.e., P("entity") = exp( Σ_i logprob(t_i) )
   
   Make sure to set the correct `json_path` in the script.

2. put the generated `data.js` file into the `my-graph-demo/src` folder.
3. 
```
cd my-graph-demo
npm start
```


10/30 TODO:
- optmize the display: when random select a subset of papers, still show "1/100" supported evidence, that is, need to calculate this info based on the selected subset only.
- sparse graph, need to think about how to aggregate different nodes (maybe clustering)

---

10/29 TODO:
- should include the correct logprob output in the json file. Currently, the "biomarkers_logprobs" seems to be the whole generation sentence's logprobs, not the entity's logprobs.  have to change Arshan's code, only store each extracted biomarker's token-level logprobs. 

Should looks like this:
```
"biomarkers":[
            {
                "type":"Amyloid Pathology",
                "name":"A\u03b2 peptides",
                "explanation":"...",
                "matched_name":{
                },
                logprob: {  # correct logprob corresponding to the entity tokens
                    "content":[
                        "bytes":[123,34], "logprob":-0.0018217856,
                        ...
                    ]
                }
            },
        ],
```

after get correct logprobs, adjust the `convert_json_to_js.py` accordingly to compute the entity-level prob.


- Same for the relations' logprobs if needed.
- Combine all the paper's graph into a big graph for better visualization. Need to use some techniques to combine the nodes, avoid cycles, and conflict edges, etc.