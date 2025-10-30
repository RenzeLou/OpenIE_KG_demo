export const PAPERS = [
  {
    "id": "1_3_19",
    "title": "Paper 1_3_19",
    "refined_relations": [],
    "biomarkers": []
  },
  {
    "id": "1_20_38",
    "title": "Paper 1_20_38",
    "refined_relations": [],
    "biomarkers": [
      {
        "type": "Gene",
        "name": "Retromer",
        "explanation": "Retromer is a protein complex involved in transporting cellular material. Its dysfunction is linked to various disorders affecting the nervous system."
      }
    ]
  },
  {
    "id": "0_52_366",
    "title": "Paper 0_52_366",
    "refined_relations": [],
    "biomarkers": [
      {
        "type": "Amyloid Pathology",
        "name": "Aβ (Amyloid Beta)",
        "explanation": "Aβ is a protein fragment produced in the brain that is known to form plaques, which are a hallmark of Alzheimer's Disease."
      }
    ]
  },
  {
    "id": "0_46_28",
    "title": "Paper 0_46_28",
    "refined_relations": [],
    "biomarkers": [
      {
        "type": "Amyloid Pathology",
        "name": "Aβ peptides",
        "explanation": "A highly conserved pattern of three Ct-truncated Aβ peptides in addition to Aβ1-40, Aβ1-42 could be shown by the Aβ-SDS-PAGE/immunoblot in the CSF of all investigated patients. Additionally, a previously undescribed peptide with Aβ-like immunoreactivity was found to regularly migrate cathodically of Aβ1-37 in all CSF samples analyzed."
      },
      {
        "type": "Amyloid Pathology",
        "name": "Synthetic a-synuclein",
        "explanation": "Synthetic a-synuclein was found to migrate at a molecular mass of approximately 16 kDa in a non-urea SDS-PAGE."
      }
    ]
  },
  {
    "id": "3_27_34",
    "title": "Paper 3_27_34",
    "refined_relations": [
      {
        "cause": {
          "type": "Tau Pathology",
          "name": "phosphorylated tau (p-tau)",
          "explanation": "Phosphorylated tau (p-tau) is a form of tau protein that has undergone abnormal phosphorylation, which is commonly associated with Alzheimer's disease and other tauopathies. The presence of p-tau is linked to the formation of neurofibrillary tangles and is a key marker of tau pathology."
        },
        "effect": {
          "type": "Cognitive Decline",
          "name": "cognitive decline",
          "explanation": "Cognitive decline refers to the deterioration of cognitive function, which can range from mild cognitive impairment to severe dementia. It is often associated with aging and neurological diseases such as Alzheimer's disease."
        },
        "evidence_phrase": "Studies have shown that increased levels of phosphorylated tau (p-tau) are associated with cognitive decline in Alzheimer's disease."
      },
      {
        "cause": {
          "type": "Neurodegeneration",
          "name": "neurofilament",
          "explanation": "Neurofilament is a marker of neurodegeneration. It is often elevated in neurodegenerative diseases and is considered an indicator of neuronal damage."
        },
        "effect": {
          "type": "Cognitive Decline",
          "name": "cognitive decline",
          "explanation": "Cognitive decline refers to deterioration in cognitive function which can occur as part of aging or due to neurodegenerative diseases."
        },
        "evidence_phrase": "Elevated levels of neurofilament are associated with cognitive decline in various neurodegenerative disorders."
      }
    ],
    "biomarkers": [
      {
        "type": "Tau Pathology",
        "name": "Phosphorylated tau (p-tau)",
        "explanation": "P-tau epitopes are identified as targets for immunotherapy to trigger an immune response that may aid in clearing tau proteins."
      },
      {
        "type": "Drug",
        "name": "AADvac-1",
        "explanation": "AADvac-1 is a vaccine developed as an anti-tau agent in Alzheimer's disease treatment, focusing on inducing an immune response against tau pathology."
      },
      {
        "type": "Neurodegeneration",
        "name": "Neurofilament",
        "explanation": "The vaccine AADvac-1 showed results in reducing blood neurofilament levels, which is associated with neurodegeneration."
      },
      {
        "type": "Drug",
        "name": "ACI-35",
        "explanation": "ACI-35 is an immunotherapy drug targeting tau pathology in Alzheimer's, though its efficacy was initially lower than expected."
      },
      {
        "type": "Drug",
        "name": "ACI-35.030",
        "explanation": "ACI-35.030 is a modified version of ACI-35, designed to enhance immune response and has shown promise in early phase trials."
      },
      {
        "type": "Cognitive Decline",
        "name": "Cognitive Decline",
        "explanation": "AADvac-1 has shown potential in slowing cognitive decline, particularly in younger patients, as observed in trials."
      }
    ]
  },
  {
    "id": "1_84_59",
    "title": "Paper 1_84_59",
    "refined_relations": [],
    "biomarkers": []
  },
  {
    "id": "1_16_41",
    "title": "Paper 1_16_41",
    "refined_relations": [
      {
        "cause": {
          "type": "Metabolism",
          "name": "insulin",
          "explanation": "Insulin is a hormone produced by the pancreas that regulates glucose levels in the blood and also has various effects on metabolism in different tissues, including influencing the expression of its own receptors."
        },
        "effect": {
          "type": "Metabolism",
          "name": "insulin receptor (IR) expression",
          "explanation": "Insulin receptor (IR) expression refers to the presence of receptors that allow cells to respond to insulin, thus playing a crucial role in the regulation of glucose uptake and insulin action."
        },
        "evidence_phrase": "Insulin upregulates its receptor expression under certain conditions, but chronic high levels can lead to downregulation."
      },
      {
        "cause": {
          "type": "Metabolism",
          "name": "insulin",
          "explanation": "Insulin is a hormone that regulates blood sugar levels."
        },
        "effect": {
          "type": "Metabolism",
          "name": "glycemic levels",
          "explanation": "Glycemic levels refer to the concentration of glucose in the blood."
        },
        "evidence_phrase": "Insulin helps maintain glycemic levels by facilitating the uptake of glucose into cells, thus lowering blood sugar."
      },
      {
        "cause": {
          "type": "Metabolism",
          "name": "glycemic levels",
          "explanation": "Glycemic levels refer to the concentration of glucose in the bloodstream, which can affect metabolic processes."
        },
        "effect": {
          "type": "Cognitive Decline",
          "name": "memory loss (or cognitive impairment)",
          "explanation": "Memory loss, often referred to as cognitive impairment, involves the deterioration of memory functions, which is a key symptom of several neurological conditions."
        },
        "evidence_phrase": "There is evidence that sustained high glycemic levels can lead to memory loss or cognitive impairment due to their detrimental effects on brain function."
      }
    ],
    "biomarkers": [
      {
        "type": "Drug",
        "name": "Insulin",
        "explanation": "Insulin is a hormone important for glucose regulation and has been associated with cognitive functions when administered peripherally or centrally."
      },
      {
        "type": "Metabolism",
        "name": "IR (Insulin Receptor) Expression",
        "explanation": "Increased insulin receptor expression is linked to improved memory and learning."
      },
      {
        "type": "Cognitive Decline",
        "name": "Memory Deficits",
        "explanation": "Memory deficits are impairments in the ability to learn, retain, or recall information."
      },
      {
        "type": "Drug",
        "name": "Streptozotocin",
        "explanation": "Streptozotocin is a chemical compound used experimentally to induce diabetes and explore insulin resistance."
      },
      {
        "type": "Cognitive Decline",
        "name": "Cognitive Impairment",
        "explanation": "Cognitive impairment refers to a decline in cognitive functions such as memory and attention, often associated with conditions like Alzheimer's Disease."
      },
      {
        "type": "Gene",
        "name": "Diabetes Type 1 and 2",
        "explanation": "Genetic and metabolic disorders with increased AD risk and associated cognitive impairments."
      }
    ]
  },
  {
    "id": "0_52_381",
    "title": "Paper 0_52_381",
    "refined_relations": [],
    "biomarkers": [
      {
        "type": "Metabolism",
        "name": "Metabolomic Characterization",
        "explanation": "The study and analysis of metabolites within a biological system, especially as related to Alzheimer's Disease, using mass spectrometry."
      }
    ]
  },
  {
    "id": "2_32_21",
    "title": "Paper 2_32_21",
    "refined_relations": [
      {
        "cause": {
          "type": "Tau Pathology",
          "name": "free tau protein",
          "explanation": "Free tau protein can undergo pathological changes that lead to aggregation."
        },
        "effect": {
          "type": "Tau Pathology",
          "name": "hyperphosphorylated tau",
          "explanation": "Hyperphosphorylated tau is a form of tau protein that has undergone a pathological modification, leading to aggregation."
        },
        "evidence_phrase": "Free tau protein contributes to the formation of hyperphosphorylated tau, which aggregates abnormally in neurodegenerative diseases."
      },
      {
        "cause": {
          "type": "Tau Pathology",
          "name": "hyperphosphorylated tau",
          "explanation": "Hyperphosphorylated tau proteins can form aggregates that disrupt cellular functions."
        },
        "effect": {
          "type": "Neurodegeneration",
          "name": "cytoskeletal proteins",
          "explanation": "Disruption in cytoskeletal proteins can affect axonal transport, hindering neuronal function."
        },
        "evidence_phrase": "Hyperphosphorylated tau leads to dysfunction in axonal transport by disrupting the normal function of cytoskeletal proteins."
      }
    ],
    "biomarkers": [
      {
        "type": "Tau Pathology",
        "name": "Hyperphosphorylated protein τ",
        "explanation": "Protein τ experiences aberrant aggregation and interaction with microtubules, contributing to tau pathology."
      }
    ]
  },
  {
    "id": "2_49_11",
    "title": "Paper 2_49_11",
    "refined_relations": [
      {
        "cause": {
          "type": "Metabolism",
          "name": "fasting insulin",
          "explanation": "Fasting insulin level is an indicator used in measuring insulin resistance and the body's glucose metabolism efficiency."
        },
        "effect": {
          "type": "Amyloid Pathology",
          "name": "neuritic plaques",
          "explanation": "Neuritic plaques are extracellular deposits found in the brain, associated with Alzheimer's disease, and contain beta-amyloid peptides."
        },
        "evidence_phrase": "Higher levels of fasting insulin are associated with an increase in neuritic plaques, suggesting a link between insulin metabolism and amyloid pathology."
      },
      {
        "cause": {
          "type": "Metabolism",
          "name": "HOMA-IR",
          "explanation": "HOMA-IR is a measure of insulin resistance, which is a metabolic dysfunction that can impact brain health."
        },
        "effect": {
          "type": "Amyloid Pathology",
          "name": "neuritic plaques",
          "explanation": "Neuritic plaques are a hallmark of Alzheimer's disease, consisting of beta-amyloid deposits that disrupt neuronal function."
        },
        "evidence_phrase": "Increased HOMA-IR is associated with a higher burden of neuritic plaques in the brain, suggesting a pathological connection between insulin resistance and amyloid plaque formation."
      },
      {
        "cause": {
          "type": "Metabolism",
          "name": "2-hour post-load plasma glucose",
          "explanation": "2-hour post-load plasma glucose is a measure used in glucose tolerance tests, indicating how well the body processes glucose after ingestion. Elevated levels can suggest glucose metabolism issues or insulin resistance."
        },
        "effect": {
          "type": "Amyloid Pathology",
          "name": "neuritic plaques",
          "explanation": "Neuritic plaques are extracellular deposits found in the brains of individuals with Alzheimer's disease, composed of amyloid-beta protein, and are considered a hallmark of Alzheimer's pathology."
        },
        "evidence_phrase": "Elevated levels of 2-hour post-load plasma glucose, indicative of impaired glucose tolerance, have been associated with increased risk or presence of neuritic plaques, a hallmark of Alzheimer's disease pathology."
      },
      {
        "cause": {
          "type": "Metabolism",
          "name": "insulin resistance (IR)",
          "explanation": "Insulin resistance (IR) is a metabolic condition where cells in the body become less sensitive to the effects of insulin in facilitating glucose uptake, which can influence a variety of bodily functions, including brain health."
        },
        "effect": {
          "type": "Neurodegeneration",
          "name": "hippocampal volume",
          "explanation": "Hippocampal volume refers to the size of the hippocampus, a region in the brain crucial for memory and learning. Reduction in hippocampal volume is associated with neurodegenerative processes and cognitive decline."
        },
        "evidence_phrase": "There is a suggested link or evidence that increasing insulin resistance may contribute to a decrease in hippocampal volume, potentially influencing cognitive decline."
      },
      {
        "cause": {
          "type": "Metabolism",
          "name": "insulin resistance (IR)",
          "explanation": "Insulin resistance (IR) is a pathological condition in which cells fail to respond normally to the hormone insulin, often leading to type 2 diabetes and affecting glucose metabolism in various tissues."
        },
        "effect": {
          "type": "Metabolism",
          "name": "glucose metabolism (temporal lobe)",
          "explanation": "Glucose metabolism (temporal lobe) refers to how glucose is processed and utilized in the temporal lobe of the brain. Impaired glucose metabolism in this region is often associated with neurological conditions."
        },
        "evidence_phrase": "Insulin resistance can lead to impaired glucose metabolism in the temporal lobe, affecting brain function."
      },
      {
        "cause": {
          "type": "Metabolism",
          "name": "glucose metabolism (temporal lobe)",
          "explanation": "The metabolism of glucose in the brain, specifically in the temporal lobe, is crucial for providing energy necessary for cognitive functions and performance."
        },
        "effect": {
          "type": "Cognitive Decline",
          "name": "cognitive performance",
          "explanation": "Cognitive performance refers to the efficacy of mental processes such as memory, attention, and problem-solving."
        },
        "evidence_phrase": "Impaired glucose metabolism in the temporal lobe is associated with reduced cognitive performance."
      }
    ],
    "biomarkers": [
      {
        "type": "Metabolism",
        "name": "Insulin Resistance (IR)",
        "explanation": "A metabolic condition where cells in the body become less responsive to insulin, often leading to increased blood glucose levels."
      },
      {
        "type": "Cognitive Decline",
        "name": "Cognitive Performance",
        "explanation": "Reduction in the ability to think, learn, and remember."
      },
      {
        "type": "Amyloid Pathology",
        "name": "Neuritic Plaques",
        "explanation": "Deposits of amyloid-beta protein in the brain, considered a hallmark of Alzheimer's Disease."
      },
      {
        "type": "Neurodegeneration",
        "name": "Mediotemporal Lobe Atrophy",
        "explanation": "Degeneration of the medial temporal lobe, a brain region crucial for memory and cognitive function."
      },
      {
        "type": "Metabolism",
        "name": "Glucose Metabolism",
        "explanation": "The process by which the body uses glucose for energy, particularly in the brain."
      }
    ]
  },
  {
    "id": "1_87_7",
    "title": "Paper 1_87_7",
    "refined_relations": [
      {
        "cause": {
          "type": "Neuroinflammation",
          "name": "glial cells",
          "explanation": "Glial cells, primarily microglia, are involved in neuroinflammation processes."
        },
        "effect": {
          "type": "Amyloid Pathology",
          "name": "Aβ",
          "explanation": "Aβ, or amyloid-beta, is a peptide that aggregates to form plaques in the brain, which is a hallmark of Alzheimer's disease."
        },
        "evidence_phrase": "Glial cells, through inflammatory processes, can influence the production or clearance of amyloid-beta (Aβ)."
      },
      {
        "cause": {
          "type": "Neuroinflammation",
          "name": "glial cells",
          "explanation": "Glial cells in the brain can become activated in response to various stimuli and contribute to neuroinflammation, which in turn can impact neuronal functions."
        },
        "effect": {
          "type": "Neurodegeneration",
          "name": "neuronal dysfunction",
          "explanation": "Disruption in the functioning of neurons, manifesting as a loss of synaptic integrity, signalling, and connectivity, often leading to eventual cell death."
        },
        "evidence_phrase": "Activation of glial cells can lead to neuroinflammation, which is a contributor to neuronal dysfunction."
      },
      {
        "cause": {
          "type": "Amyloid Pathology",
          "name": "Aβ",
          "explanation": "Aβ, or amyloid-beta, is a peptide that accumulates in the brains of individuals with Alzheimer's disease, forming plaques that are associated with neuronal damage and dysfunction."
        },
        "effect": {
          "type": "Neurodegeneration",
          "name": "neuronal dysfunction",
          "explanation": "Neuronal dysfunction refers to the impaired function of neurons, which can be caused by toxic insults such as amyloid-beta accumulation."
        },
        "evidence_phrase": "The presence of amyloid-beta (Aβ) is known to lead to neuronal dysfunction, which is a characteristic seen in Alzheimer's disease."
      },
      {
        "cause": {
          "type": "Amyloid Pathology",
          "name": "Aβ",
          "explanation": "Aβ (Beta-amyloid) is involved in the formation of amyloid plaques in the brain, which are a hallmark of Alzheimer's disease."
        },
        "effect": {
          "type": "Neurodegeneration",
          "name": "neurodegeneration",
          "explanation": "Neurodegeneration refers to the progressive loss of structure or function of neurons, including cell death, and is a characteristic of various neurodegenerative diseases."
        },
        "evidence_phrase": "Accumulation of Aβ plaques is associated with the progression of neurodegenerative processes."
      },
      {
        "cause": {
          "type": "Tau Pathology",
          "name": "tau",
          "explanation": "Tau proteins can become abnormally phosphorylated and lead to the formation of neurofibrillary tangles (NFTs), a hallmark of certain neurodegenerative diseases."
        },
        "effect": {
          "type": "Tau Pathology",
          "name": "neurofibrillary tangles (NFTs)",
          "explanation": "Neurofibrillary tangles (NFTs) are aggregates of hyperphosphorylated tau protein that are commonly found in the brains of individuals with Alzheimer's disease and other tauopathies."
        },
        "evidence_phrase": "Tau proteins can become abnormally phosphorylated, leading to the formation of neurofibrillary tangles."
      },
      {
        "cause": {
          "type": "Metabolism",
          "name": "oxidative stress",
          "explanation": "Oxidative stress is a condition characterized by excessive reactive oxygen species (ROS) which can damage cellular components, including lipids, proteins, and DNA."
        },
        "effect": {
          "type": "Amyloid Pathology",
          "name": "Aβ",
          "explanation": "Aβ refers to amyloid-beta, which is a peptide that accumulates abnormally in the brains of people with Alzheimer's disease, forming plaques that are a hallmark of the condition."
        },
        "evidence_phrase": "There is evidence that oxidative stress can promote the production or accumulation of amyloid-beta (Aβ) in the brain, which is associated with Alzheimer's disease pathology."
      },
      {
        "cause": {
          "type": "Neurodegeneration",
          "name": "oxidative stress",
          "explanation": "Oxidative stress refers to an imbalance between free radicals and antioxidants in the body, leading to damage of biomolecules and contributing to neurodegenerative processes."
        },
        "effect": {
          "type": "Tau Pathology",
          "name": "tau",
          "explanation": "Tau is a protein that stabilizes microtubules; in pathological states, it becomes hyperphosphorylated and forms neurofibrillary tangles, contributing to neurodegeneration."
        },
        "evidence_phrase": "Oxidative stress is suggested to contribute to tau pathology, including its hyperphosphorylation and aggregation into neurofibrillary tangles, which are characteristic of tau-related neurodegenerative diseases."
      },
      {
        "cause": {
          "type": "Metabolism",
          "name": "mitochondrial dysfunction",
          "explanation": "Mitochondrial dysfunction can lead to impaired energy production and increased oxidative stress, negatively affecting cellular functions."
        },
        "effect": {
          "type": "Metabolism",
          "name": "calcium metabolism",
          "explanation": "Calcium metabolism encompasses the regulation of calcium ions within the body, critical for various cellular processes including signal transduction, muscle contraction, and neural communication."
        },
        "evidence_phrase": "Dysfunction in mitochondrial processes can disrupt calcium homeostasis, leading to altered calcium metabolism."
      },
      {
        "cause": {
          "type": "Neuroinflammation",
          "name": "neuroinflammation",
          "explanation": "Neuroinflammation refers to the inflammation of nervous tissue, which can involve activation of glial cells and release of inflammatory cytokines."
        },
        "effect": {
          "type": "Neurodegeneration",
          "name": "neurodegeneration",
          "explanation": "Neurodegeneration refers to the progressive loss of structure or function of neurons, which may be influenced by factors like neuroinflammation and oxidative stress."
        },
        "evidence_phrase": "Neuroinflammation, potentially involving glial cells, can lead to or exacerbate neurodegeneration through mechanisms such as the release of inflammatory cytokines."
      }
    ],
    "biomarkers": [
      {
        "type": "Amyloid Pathology",
        "name": "Ab",
        "explanation": "Amyloid beta (Ab) is a protein that can aggregate to form senile plaques, implicated in Alzheimer's disease."
      },
      {
        "type": "Neurodegeneration",
        "name": "Neurodegeneration",
        "explanation": "Refers to the progressive loss of structure or function of neurons, including their death."
      },
      {
        "type": "Neuroinflammation",
        "name": "Glial cell dysfunction",
        "explanation": "Dysfunction in glial cells can lead to a cytotoxic environment, contributing to Alzheimer’s pathology."
      },
      {
        "type": "Tau Pathology",
        "name": "Tau-dependent NFTs",
        "explanation": "Neurofibrillary tangles (NFTs) are aggregates of hyperphosphorylated tau protein, a hallmark of Alzheimer's disease."
      },
      {
        "type": "Metabolism",
        "name": "Impairment of calcium metabolism",
        "explanation": "Alterations in calcium metabolism can affect cell signaling and health, contributing to Alzheimer's pathology."
      },
      {
        "type": "Neurodegeneration",
        "name": "Neuronal dysfunction",
        "explanation": "Refers to impaired function of nerve cells, which can lead to degeneration and Alzheimer's pathology."
      }
    ]
  },
  {
    "id": "3_85_68",
    "title": "Paper 3_85_68",
    "refined_relations": [
      {
        "cause": {
          "type": "Gene",
          "name": "cholinesterase (ChE)",
          "explanation": "Cholinesterase (ChE) is an enzyme that breaks down the neurotransmitter acetylcholine, and it includes acetylcholinesterase (AChE) specifically for this function in the nervous system."
        },
        "effect": {
          "type": "Cognitive Decline",
          "name": "MMSE score",
          "explanation": "MMSE (Mini-Mental State Examination) score is a measure of cognitive function, and a decline in this score is often used to indicate cognitive decline, such as that seen in Alzheimer's disease."
        },
        "evidence_phrase": "no direct relation given in text"
      }
    ],
    "biomarkers": [
      {
        "type": "Drug",
        "name": "Donepezil",
        "explanation": "Donepezil is a cholinesterase inhibitor used in the treatment of Alzheimer's Disease, shown to maintain cognitive benefits over several years."
      },
      {
        "type": "Cognitive Decline",
        "name": "MMSE Score",
        "explanation": "The Mini-Mental State Examination (MMSE) score is used to measure cognitive impairment."
      }
    ]
  },
  {
    "id": "1_20_34",
    "title": "Paper 1_20_34",
    "refined_relations": [
      {
        "cause": {
          "type": "Gene",
          "name": "LRRK2 mutations",
          "explanation": "Genetic mutations in the LRRK2 gene, which have been linked to increased risk of Parkinson's disease and potentially other neurodegenerative disorders."
        },
        "effect": {
          "type": "Neurodegeneration",
          "name": "neurotoxic effects",
          "explanation": "Adverse effects on the nervous system's structure or function, often leading to neuronal injury or death."
        },
        "evidence_phrase": "LRRK2 mutations have been associated with neurotoxic effects, suggesting a mechanistic link between the genetic abnormalities and neuronal damage."
      },
      {
        "cause": {
          "type": "Metabolism",
          "name": "retromer levels",
          "explanation": "Retromer levels refer to the abundance of retromer complexes, which are involved in sorting and trafficking proteins in the cell. Increased retromer levels can influence cellular processes."
        },
        "effect": {
          "type": "Neurodegeneration",
          "name": "neurotoxic effects",
          "explanation": "Neurotoxic effects refer to adverse effects on the nervous system and neurons, potentially leading to cell death and neurodegeneration."
        },
        "evidence_phrase": "Increased retromer levels are associated with a reduction in neurotoxic effects, as the retromer complex plays a role in protein trafficking and cellular homeostasis."
      }
    ],
    "biomarkers": [
      {
        "type": "Gene",
        "name": "LRRK2",
        "explanation": "A gene that, when mutated, is linked to neurotoxic effects and Parkinson's Disease."
      },
      {
        "type": "Drug",
        "name": "Retromer drugs",
        "explanation": "Drugs that potentially enhance retromer function and may reverse neurotoxic effects, especially for LRRK2-induced pathologies."
      },
      {
        "type": "Neurodegeneration",
        "name": "Neurotoxic effects",
        "explanation": "Harmful alterations to the nervous system, often linked to gene mutations such as those in LRRK2."
      }
    ]
  },
  {
    "id": "0_52_653",
    "title": "Paper 0_52_653",
    "refined_relations": [
      {
        "cause": {
          "type": "Amyloid Pathology",
          "name": "Pittsburgh compound B (PiB)",
          "explanation": "Pittsburgh compound B (PiB) is a radiotracer used in imaging studies to detect amyloid-beta plaques in the brain, which are characteristic of Alzheimer's disease. In amyloid PET scans, PiB binds to these plaques."
        },
        "effect": {
          "type": "Amyloid Pathology",
          "name": "amyloid PET",
          "explanation": "Amyloid PET imaging is a type of positron emission tomography scan that uses radiotracers to visualize amyloid-beta plaques in the brain. It is used as a diagnostic tool to assess the presence of amyloid pathology in individuals."
        },
        "evidence_phrase": "Amyloid PET imaging uses Pittsburgh compound B (PiB) to visualize amyloid-beta plaques in the brain."
      },
      {
        "cause": {
          "type": "Amyloid Pathology",
          "name": "amyloid PET",
          "explanation": "Amyloid PET is a type of imaging that detects amyloid plaques in the brain, which are indicative of Aβ (amyloid-beta) pathology."
        },
        "effect": {
          "type": "Amyloid Pathology",
          "name": "Aβ (amyloid-beta) pathology",
          "explanation": "Aβ pathology refers to the accumulation of amyloid-beta plaques in the brain, a hallmark of Alzheimer's disease."
        },
        "evidence_phrase": "Amyloid PET imaging has been shown to correlate with the presence of Aβ pathology in Alzheimer's disease patients."
      }
    ],
    "biomarkers": [
      {
        "type": "Neurodegeneration",
        "name": "18 F-FDG PET",
        "explanation": "18 F-FDG PET is used to detect neuronal injury and degeneration associated with Alzheimer's Disease (AD)."
      },
      {
        "type": "Amyloid Pathology",
        "name": "Amyloid PET with Pittsburgh compound B",
        "explanation": "Amyloid PET imaging with Pittsburgh compound B is used to visualize amyloid-beta deposits characteristic of Alzheimer's Disease (AD)."
      }
    ]
  },
  {
    "id": "2_19_64",
    "title": "Paper 2_19_64",
    "refined_relations": [
      {
        "cause": {
          "type": "Vascular Pathology",
          "name": "blood-brain barrier (BBB) dysfunction",
          "explanation": "The breakdown of the blood-brain barrier (BBB), a crucial structural and functional barrier that regulates the passage of substances from the bloodstream into the central nervous system."
        },
        "effect": {
          "type": "Metabolism",
          "name": "glucose uptake",
          "explanation": "The process by which cells absorb glucose from the bloodstream, crucial for cellular energy production, particularly in the brain."
        },
        "evidence_phrase": "BBB dysfunction can lead to impaired glucose uptake in the brain, affecting metabolic processes."
      },
      {
        "cause": {
          "type": "Metabolism",
          "name": "glucose metabolism",
          "explanation": "Glucose metabolism refers to the series of biochemical processes that occur to break down glucose and extract energy for cellular functions."
        },
        "effect": {
          "type": "Vascular Pathology",
          "name": "blood-brain barrier (BBB) dysfunction",
          "explanation": "Blood-brain barrier (BBB) dysfunction occurs when the protective barrier of the brain is compromised, allowing harmful substances to enter the brain, which can contribute to neurological disorders."
        },
        "evidence_phrase": "While glucose metabolism is essential for energy production, dysfunctions in these processes can lead to compromised vascular health, potentially impacting the integrity of the blood-brain barrier."
      }
    ],
    "biomarkers": [
      {
        "type": "Metabolism",
        "name": "Glucose Metabolism",
        "explanation": "The process by which glucose is taken up by neurons and glial cells for energy."
      },
      {
        "type": "Neurodegeneration",
        "name": "Neuronal Degeneration",
        "explanation": "Refers to the progressive loss of structure or function of neurons, including cell death."
      },
      {
        "type": "Vascular Pathology",
        "name": "Blood-Brain Barrier (BBB) Dysfunction",
        "explanation": "Impairment of the BBB, which is responsible for protecting the brain from harmful substances."
      },
      {
        "type": "Metabolism",
        "name": "Glucose Uptake",
        "explanation": "The process by which cells absorb glucose from the bloodstream."
      },
      {
        "type": "Drug",
        "name": "Alcohol",
        "explanation": "A substance found in beverages that can affect various biological processes, including glucose metabolism and the BBB."
      }
    ]
  },
  {
    "id": "3_85_39",
    "title": "Paper 3_85_39",
    "refined_relations": [],
    "biomarkers": [
      {
        "type": "Drug",
        "name": "Galantamine",
        "explanation": "A drug under investigation for Alzheimer's treatment that has shown varied results in preclinical and clinical studies."
      }
    ]
  },
  {
    "id": "3_44_0",
    "title": "Paper 3_44_0",
    "refined_relations": [],
    "biomarkers": [
      {
        "type": "Neurodegeneration",
        "name": "Alzheimer's disease",
        "explanation": "A late-stage neurodegenerative disorder associated with progressive dementia that can lead to severe symptoms including brain death."
      },
      {
        "type": "Cognitive Decline",
        "name": "Cognitive decline",
        "explanation": "One of the symptoms of Alzheimer's disease, indicating a deterioration in cognitive function."
      }
    ]
  },
  {
    "id": "1_29_33",
    "title": "Paper 1_29_33",
    "refined_relations": [],
    "biomarkers": []
  },
  {
    "id": "3_55_26",
    "title": "Paper 3_55_26",
    "refined_relations": [
      {
        "cause": {
          "type": "Gene",
          "name": "APP",
          "explanation": "APP is a gene that encodes the amyloid precursor protein, which is cleaved to form amyloid-beta (Aβ) peptides, including Aβ1-40."
        },
        "effect": {
          "type": "Amyloid Pathology",
          "name": "Aβ1-40",
          "explanation": "Aβ1-40 is a specific form of amyloid-beta peptide that is associated with amyloid pathology in Alzheimer's disease."
        },
        "evidence_phrase": "The cleavage of APP can lead to the production of amyloid-beta peptides such as Aβ1-40, contributing to amyloid plaque formation in Alzheimer's disease."
      },
      {
        "cause": {
          "type": "Gene",
          "name": "APP",
          "explanation": "Amyloid precursor protein (APP) is cleaved to form amyloid-beta peptides, including Aβ1-42."
        },
        "effect": {
          "type": "Amyloid Pathology",
          "name": "Aβ1-42",
          "explanation": "Aβ1-42 is a specific form of amyloid-beta peptide that aggregates to form amyloid plaques in the brain, associated with Alzheimer's disease."
        },
        "evidence_phrase": "APP is processed to produce Aβ1-42, a key component in amyloid plaques."
      },
      {
        "cause": {
          "type": "Gene",
          "name": "PSEN1",
          "explanation": "PSEN1 is a gene involved in the production of the gamma-secretase complex, which cleaves APP into amyloid beta peptides."
        },
        "effect": {
          "type": "Amyloid Pathology",
          "name": "Aβ1-40",
          "explanation": "Aβ1-40 is a form of amyloid-beta peptide that is produced from the cleavage of APP and is associated with amyloid plaque formation."
        },
        "evidence_phrase": "Mutations in PSEN1 can alter the activity of gamma-secretase, affecting the production of Aβ1-40."
      },
      {
        "cause": {
          "type": "Gene",
          "name": "PSEN1",
          "explanation": "A gene that can have mutations associated with increased amyloid production and Alzheimer's disease."
        },
        "effect": {
          "type": "Amyloid Pathology",
          "name": "Aβ1-42",
          "explanation": "A form of amyloid-beta peptide that aggregates into plaques in the brain, associated with Alzheimer's disease."
        },
        "evidence_phrase": "Mutations in PSEN1 can lead to increased production of Aβ1-42, a key component in the formation of amyloid plaques seen in Alzheimer's disease."
      },
      {
        "cause": {
          "type": "Gene",
          "name": "PSEN2",
          "explanation": "PSEN2 is a gene that is part of the gamma-secretase complex, which is involved in the processing of amyloid precursor protein (APP) to produce amyloid-beta peptides, including Aβ1-40 and Aβ1-42."
        },
        "effect": {
          "type": "Amyloid Pathology",
          "name": "Aβ1-40",
          "explanation": "Aβ1-40 is a form of amyloid-beta peptide that is produced from the cleavage of amyloid precursor protein (APP) by enzymes like gamma-secretase, which involves the PSEN2 gene."
        },
        "evidence_phrase": "Mutations in the PSEN2 gene are known to alter the activity of gamma-secretase, leading to changes in the production of amyloid-beta peptides, including Aβ1-40 and Aβ1-42."
      },
      {
        "cause": {
          "type": "Gene",
          "name": "PSEN2",
          "explanation": "PSEN2 is related to amyloid precursor protein processing."
        },
        "effect": {
          "type": "Amyloid Pathology",
          "name": "Aβ1-42",
          "explanation": "Aβ1-42 is a specific form of amyloid-beta related to Alzheimer's disease."
        },
        "evidence_phrase": "Mutations in PSEN2 can lead to altered processing of amyloid precursor protein, resulting in increased production of Aβ1-42."
      },
      {
        "cause": {
          "type": "Gene",
          "name": "APP",
          "explanation": "APP is a gene that encodes the amyloid precursor protein, which is cleaved to produce amyloid-beta peptides involved in Alzheimer's disease."
        },
        "effect": {
          "type": "Amyloid Pathology",
          "name": "Aβ1-42",
          "explanation": "Aβ1-42 is a form of amyloid-beta, a peptide known to aggregate and form plaques, a hallmark of Alzheimer's disease."
        },
        "evidence_phrase": "Mutations in the APP gene lead to increased production of Aβ1-42, contributing to amyloid plaque formation in Alzheimer's disease."
      }
    ],
    "biomarkers": [
      {
        "type": "Gene",
        "name": "APP",
        "explanation": "Mutations in APP have been identified in Caribbean Hispanic individuals with early-onset Alzheimer's Disease (AD)."
      },
      {
        "type": "Gene",
        "name": "PSEN1",
        "explanation": "Mutations in PSEN1, including variants on an African haplotype and codon 280 (E280A), are linked to early-onset AD."
      },
      {
        "type": "Gene",
        "name": "PSEN2",
        "explanation": "Mutations in PSEN2 have been identified in Caribbean Hispanic individuals with early-onset AD."
      },
      {
        "type": "Drug",
        "name": "Crenezumab",
        "explanation": "A monoclonal antibody used in a clinical trial to test its efficacy against monomeric and aggregated Aβ 1-40 and Aβ 1-42."
      },
      {
        "type": "Gene",
        "name": "APOE ε4",
        "explanation": "APOE ε4 homozygosity effects are blunted in Caribbean Hispanic individuals regarding AD risk."
      },
      {
        "type": "Amyloid Pathology",
        "name": "Aβ 1-40 and Aβ 1-42",
        "explanation": "Targets of the drug crenezumab in Alzheimer's treatment trials."
      },
      {
        "type": "Cognitive Decline",
        "name": "Cognitive Decline",
        "explanation": "Although no statistically significant outcomes from treatment were identified, cognitive outcomes showed trends towards improvement."
      }
    ]
  },
  {
    "id": "3_5_53",
    "title": "Paper 3_5_53",
    "refined_relations": [
      {
        "cause": {
          "type": "Gene",
          "name": "BDNF",
          "explanation": "Brain-Derived Neurotrophic Factor (BDNF) is a protein that promotes the survival of nerve cells by playing a role in the growth, maturation, and maintenance of these cells. It is involved in neuroplasticity, which allows the brain to adapt to new situations or changes in the environment."
        },
        "effect": {
          "type": "Gene",
          "name": "phosphorylated CREB",
          "explanation": "Phosphorylated CREB (cAMP response element-binding protein) is a transcription factor that becomes active when phosphorylated. Its activation leads to changes in gene expression that are important for processes such as memory and learning."
        },
        "evidence_phrase": "Activation of BDNF leads to the phosphorylation of CREB, which then influences gene expression related to neuronal survival and plasticity."
      },
      {
        "cause": {
          "type": "Gene",
          "name": "CREB",
          "explanation": "CREB is a transcription factor that, when activated by phosphorylation, can lead to changes in gene expression."
        },
        "effect": {
          "type": "Gene",
          "name": "phosphorylated CREB",
          "explanation": "Phosphorylated CREB is the activated form of the CREB protein, which can then bind to DNA and regulate transcription."
        },
        "evidence_phrase": "Activation of CREB leads to its phosphorylation, resulting in phospho-CREB which is an active transcription factor form."
      },
      {
        "cause": {
          "type": "Gene",
          "name": "BDNF",
          "explanation": "BDNF is a growth factor involved in neuroplasticity and synaptic regulation."
        },
        "effect": {
          "type": "Cognitive Decline",
          "name": "Impaired memory function",
          "explanation": "Impaired memory function is associated with failures in learning and recall."
        },
        "evidence_phrase": "BDNF supports synaptic plasticity, which is crucial for memory formation. Impaired BDNF signaling is linked to impaired memory function."
      }
    ],
    "biomarkers": [
      {
        "type": "Cognitive Decline",
        "name": "Cognitive performance",
        "explanation": "Refers to the ability to effectively perform tasks requiring attention, memory, and problem-solving skills."
      },
      {
        "type": "Gene",
        "name": "BDNF",
        "explanation": "Brain-Derived Neurotrophic Factor, a protein known to support neuronal survival, growth, and differentiation."
      },
      {
        "type": "Metabolism",
        "name": "cAMP response element-binding protein (CREB)",
        "explanation": "A cellular transcription factor that helps switch on genes needed for memory and learning."
      },
      {
        "type": "Drug",
        "name": "L. paracasei K71",
        "explanation": "A probiotic strain used to enhance cognitive performance by affecting neural pathways."
      },
      {
        "type": "Drug",
        "name": "B. subtilis",
        "explanation": "A probiotic strain that impacts Alzheimer's related changes, improving behavioral and physiological responses."
      },
      {
        "type": "Amyloid Pathology",
        "name": "Aβ",
        "explanation": "Amyloid-beta, a protein involved in the formation of plaques in the brains of those with Alzheimer's disease."
      }
    ]
  },
  {
    "id": "3_32_29",
    "title": "Paper 3_32_29",
    "refined_relations": [
      {
        "cause": {
          "type": "Neuroinflammation",
          "name": "microglia",
          "explanation": "Microglia are a type of glial cell located throughout the brain and spinal cord, which act as the main form of active immune defense in the central nervous system. They are involved in neuroinflammatory processes."
        },
        "effect": {
          "type": "Neuroinflammation",
          "name": "inflammation",
          "explanation": "Inflammation is a biological response to harmful stimuli, such as pathogens, damaged cells, or toxins, and is a protective response involving immune cells, blood vessels, and molecular mediators."
        },
        "evidence_phrase": "Microglia are known to contribute to neuroinflammation."
      },
      {
        "cause": {
          "type": "Neuroinflammation",
          "name": "astrocytes",
          "explanation": "Astrocytes are a type of glial cell in the brain and spinal cord that are involved in the inflammatory response."
        },
        "effect": {
          "type": "Neuroinflammation",
          "name": "inflammation",
          "explanation": "Inflammation is a biological response to harmful stimuli, and in the context of the brain, it often involves glial cells like astrocytes and microglia."
        },
        "evidence_phrase": "Astrocytes become reactive and contribute to neuroinflammation."
      },
      {
        "cause": {
          "type": "Vascular Pathology",
          "name": "endothelial cell markers",
          "explanation": "Endothelial cell markers are associated with the integrity and function of the vascular endothelium, and changes in these markers can indicate vascular dysfunction and contribute to inflammatory processes."
        },
        "effect": {
          "type": "Neuroinflammation",
          "name": "inflammation",
          "explanation": "Inflammation refers to the immune response occurring in tissues, which can be part of the central nervous system's response to various pathological processes."
        },
        "evidence_phrase": "Endothelial cell markers contribute to the regulation of vascular function, and dysfunction can lead to inflammatory responses."
      },
      {
        "cause": {
          "type": "Gene",
          "name": "extracellular matrix (ECM) proteins",
          "explanation": "ECM proteins are components of the extracellular matrix that provide structural and biochemical support to surrounding cells."
        },
        "effect": {
          "type": "Neuroinflammation",
          "name": "inflammation",
          "explanation": "Inflammation is a biological response to harmful stimuli that can result from various causes, potentially involving cells interacting with ECM proteins."
        },
        "evidence_phrase": "ECM proteins can influence cell-cell interactions and modulate inflammation by providing structural support and biochemical signals."
      },
      {
        "cause": {
          "type": "Gene",
          "name": "CAV1",
          "explanation": "CAV1 is a gene that encodes caveolin-1, a protein that is involved in the formation of caveolae and is implicated in various cellular processes including vascular function."
        },
        "effect": {
          "type": "Neurodegeneration",
          "name": "extracellular matrix (ECM) proteins",
          "explanation": "Extracellular matrix (ECM) proteins are important components of the brain's structural framework and are involved in various functions including neuroinflammation and neurodegeneration."
        },
        "evidence_phrase": "CAV1 influences the behavior of extracellular matrix (ECM) proteins due to its role in cellular processes that affect ECM composition and function."
      },
      {
        "cause": {
          "type": "Gene",
          "name": "COL6A1",
          "explanation": "COL6A1 is a gene that codes for one of the collagen proteins that are a major component of the extracellular matrix (ECM). Mutations or changes in the expression of COL6A1 can affect ECM structure and function."
        },
        "effect": {
          "type": "Metabolism",
          "name": "extracellular matrix (ECM) proteins",
          "explanation": "Extracellular matrix (ECM) proteins are involved in providing structural and biochemical support to surrounding cells. Changes in ECM proteins can influence various biological processes, including cell adhesion and migration."
        },
        "evidence_phrase": "COL6A1 influences the structure and composition of extracellular matrix proteins."
      },
      {
        "cause": {
          "type": "Gene",
          "name": "COL6A3",
          "explanation": "COL6A3 is a gene encoding the alpha 3 chain of type VI collagen, a component of the extracellular matrix."
        },
        "effect": {
          "type": "Neurodegeneration",
          "name": "extracellular matrix (ECM) proteins",
          "explanation": "The extracellular matrix (ECM) is a collection of extracellular molecules, including proteins, that provides structural and biochemical support to surrounding cells."
        },
        "evidence_phrase": "COL6A3 encodes a component of ECM."
      }
    ],
    "biomarkers": [
      {
        "type": "Neuroinflammation",
        "name": "Vascular-mediated inflammation",
        "explanation": "Role of vascular-mediated inflammation is supported by the co-expression of glial and endothelial proteins."
      },
      {
        "type": "Vascular Pathology",
        "name": "Extracellular matrix (ECM) proteins",
        "explanation": "ECM proteins are responsible for mediating cell-cell interactions, and the module contains vascular elements."
      },
      {
        "type": "Vascular Pathology",
        "name": "Endothelial proteins",
        "explanation": "Endothelial proteins are upregulated in AD dementia and linked to vascular pathology."
      },
      {
        "type": "Neurodegeneration",
        "name": "Alzheimer's Disease (AD)",
        "explanation": "AD pathogenesis is associated with vascular-mediated inflammation and ECM proteins."
      }
    ]
  },
  {
    "id": "2_98_1",
    "title": "Paper 2_98_1",
    "refined_relations": [],
    "biomarkers": [
      {
        "type": "Amyloid Pathology",
        "name": "Amyloid-β42 (Aβ42)",
        "explanation": "Misaggregated protein involved in AD, detected via PET imaging and CSF concentrations."
      },
      {
        "type": "Tau Pathology",
        "name": "Tau",
        "explanation": "Misaggregated protein involved in AD, detected via PET imaging and CSF concentrations."
      }
    ]
  },
  {
    "id": "0_60_15",
    "title": "Paper 0_60_15",
    "refined_relations": [
      {
        "cause": {
          "type": "Metabolism",
          "name": "PKC",
          "explanation": "Protein kinase C (PKC) is a family of protein kinases that are activated by signals such as increases in the concentration of calcium ions or diacylglycerol (DAG). PKC is involved in controlling the function of other proteins through the phosphorylation of hydroxyl groups of serine and threonine amino acid residues on these proteins. One of the roles of PKC is to activate other enzymes or receptors through phosphorylation."
        },
        "effect": {
          "type": "Metabolism",
          "name": "ADAM (TACE)",
          "explanation": "ADAM (A Disintegrin and Metalloproteinase) proteins, particularly ADAM-17 (also known as TACE, Tumor Necrosis Factor-Alpha Converting Enzyme), are membrane-anchored enzymes that can cut other proteins just outside the cell membrane. This process, known as ectodomain shedding, can regulate the activity of those proteins. For instance, ADAM-17 is known to cleave and release the ectodomains of several proteins involved in inflammatory processes."
        },
        "evidence_phrase": "PKC activation enhances ADAM (TACE) activity through phosphorylation."
      },
      {
        "cause": {
          "type": "Gene",
          "name": "PKC",
          "explanation": "PKC refers to Protein Kinase C, a family of phospholipid-dependent serine/threonine kinases involved in various cellular processes, including regulation of other proteins involved in signal transduction and cellular function."
        },
        "effect": {
          "type": "Gene",
          "name": "ADAM-10",
          "explanation": "ADAM-10 (A Disintegrin And Metalloproteinase domain-containing protein 10) is an enzyme involved in the shedding of membrane proteins and processing of amyloid precursor protein (APP), thereby reducing the formation of pathogenic amyloid-beta."
        },
        "evidence_phrase": "PKC is known to phosphorylate and regulate the activity of ADAM-10, enhancing its function as an α-secretase."
      },
      {
        "cause": {
          "type": "Metabolism",
          "name": "PKC",
          "explanation": "Protein kinase C (PKC) is involved in signal transduction processes and has a role in the phosphorylation cascade that can lead to the activation of mitogen-activated protein kinases (MAPKs) such as ERK1/2."
        },
        "effect": {
          "type": "Metabolism",
          "name": "MAPKs ERK1/2",
          "explanation": "Mitogen-activated protein kinases (MAPKs) ERK1 and ERK2 are key signaling molecules that are activated in the downstream of many signaling pathways, including those involving PKC."
        },
        "evidence_phrase": "PKC activation leads to the activation of MAPKs ERK1/2."
      },
      {
        "cause": {
          "type": "Gene",
          "name": "MAPKs ERK1/2",
          "explanation": "MAPKs ERK1/2 are mitogen-activated protein kinases involved in various cellular signaling pathways."
        },
        "effect": {
          "type": "Gene",
          "name": "ADAM (TACE)",
          "explanation": "ADAM (TACE) is a disintegrin and metalloproteinase domain-containing protein involved in shedding of cell surface proteins."
        },
        "evidence_phrase": "Activation of MAPKs ERK1/2 leads to increased activity of ADAM (TACE), which can shed proteins from the cell surface."
      },
      {
        "cause": {
          "type": "Gene",
          "name": "β-secretase",
          "explanation": "β-secretase is an enzyme that cleaves the amyloid precursor protein (APP), leading to the formation of the amyloid beta (Aβ) peptide, such as Aβ1-42."
        },
        "effect": {
          "type": "Amyloid Pathology",
          "name": "Aβ1-42",
          "explanation": "Aβ1-42 is a form of amyloid beta peptide that is formed after APP is cleaved by β-secretase. It is implicated in the development of amyloid plaques in Alzheimer's disease."
        },
        "evidence_phrase": "β-secretase cleaves APP to form Aβ1-42 through proteolytic processing."
      }
    ],
    "biomarkers": [
      {
        "type": "Gene",
        "name": "ADAM-10",
        "explanation": "a-secretase involved in the proteolytic processing of amyloid precursor protein (APP)."
      },
      {
        "type": "Gene",
        "name": "TACE",
        "explanation": "Tumor necrosis factor-a converting enzyme, part of the ADAM family of a-secretases involved in amyloid processing."
      },
      {
        "type": "Metabolism",
        "name": "PKC",
        "explanation": "Protein kinase C, an enzyme that can phosphorylate other proteins and influence their activity, including a-secretases."
      },
      {
        "type": "Metabolism",
        "name": "MAPKs ERK1/2",
        "explanation": "Mitogen-activated protein kinases ERK1/2, enzymes that phosphorylate proteins and regulate various cellular activities."
      }
    ]
  },
  {
    "id": "3_19_21",
    "title": "Paper 3_19_21",
    "refined_relations": [
      {
        "cause": {
          "type": "Vascular Pathology",
          "name": "vascular endothelial cells",
          "explanation": "Vascular endothelial cells are cells lining the blood vessels and are involved in the formation of tight junctions, which are critical for maintaining the blood-brain barrier."
        },
        "effect": {
          "type": "Vascular Pathology",
          "name": "tight junction proteins",
          "explanation": "Tight junction proteins are proteins that form tight junctions, which are crucial for the function of the blood-brain barrier and are affected by the state of vascular endothelial cells."
        },
        "evidence_phrase": "Vascular endothelial cells are responsible for the regulation and expression of tight junction proteins, which are critical components in forming the blood-brain barrier."
      },
      {
        "cause": {
          "type": "Vascular Pathology",
          "name": "vascular endothelial cells",
          "explanation": "Vascular endothelial cells are critical components of blood vessels and contribute to the integrity and function of the vascular system. They help maintain the blood-brain barrier by interacting with various junctional proteins, including adherens junction proteins, to regulate vascular permeability and stability."
        },
        "effect": {
          "type": "Vascular Pathology",
          "name": "adherens junction proteins",
          "explanation": "Adherens junction proteins are involved in the formation of junctions between cells, including endothelial cells. They are crucial for maintaining the structural integrity of tissues, including the vascular system, by mediating cell-cell adhesion and signaling."
        },
        "evidence_phrase": "Vascular endothelial cells contribute to the regulation and function of adherens junction proteins, maintaining vascular integrity and permeability."
      },
      {
        "cause": {
          "type": "Vascular Pathology",
          "name": "pericytes",
          "explanation": "Pericytes are cells that wrap around the endothelial cells of capillaries and venules and are involved in the regulation of the blood-brain barrier, cerebral blood flow, and are implicated in vascular pathology."
        },
        "effect": {
          "type": "Vascular Pathology",
          "name": "extracellular matrix (ECM) proteins",
          "explanation": "Extracellular matrix proteins form a network outside of cells that provides structural and biochemical support to the surrounding cells and influences tissue development and disease."
        },
        "evidence_phrase": "The relation between pericytes and extracellular matrix proteins is important in understanding how vascular pathology can influence the structure and function of the ECM."
      }
    ],
    "biomarkers": []
  },
  {
    "id": "3_58_20",
    "title": "Paper 3_58_20",
    "refined_relations": [
      {
        "cause": {
          "type": "Amyloid Pathology",
          "name": "Aβ (amyloid-beta)",
          "explanation": "Aβ, or amyloid-beta, peptides are known to accumulate and form plaques in the brain, which is a hallmark of Alzheimer's disease. This accumulation is believed to activate various types of brain cells, including astrocytes, leading to their reactive state."
        },
        "effect": {
          "type": "Neuroinflammation",
          "name": "reactive astrocyte biomarkers",
          "explanation": "Reactive astrocyte biomarkers indicate a state where astrocytes, a type of glial cell in the brain, become 'reactive'. This state is often indicative of neuroinflammation and is associated with various pathologies, including Alzheimer's disease."
        },
        "evidence_phrase": "Amyloid-beta leads to the activation and reactive state of astrocytes, contributing to neuroinflammation in the brain."
      },
      {
        "cause": {
          "type": "Tau Pathology",
          "name": "tau",
          "explanation": "Tau pathology is characterized by the accumulation of tau protein in the form of neurofibrillary tangles, which is a hallmark of several neurodegenerative diseases like Alzheimer's."
        },
        "effect": {
          "type": "Neuroinflammation",
          "name": "reactive astrocyte biomarkers",
          "explanation": "Reactive astrocytes are a form of astrocyte (a type of glial cell in the brain) that become activated in response to injury or disease, and changes in their expression can serve as biomarkers of neuroinflammation."
        },
        "evidence_phrase": "Studies have shown that tau pathology can lead to activation of astrocytes, which is reflected in altered reactive astrocyte biomarkers."
      },
      {
        "cause": {
          "type": "Neuroinflammation",
          "name": "reactive astrocyte biomarkers",
          "explanation": "Reactive astrocyte biomarkers indicate the presence of astrocytes, a type of glial cell, becoming reactive, which is often a response to neuroinflammation."
        },
        "effect": {
          "type": "Neurodegeneration",
          "name": "neurodegeneration",
          "explanation": "Neurodegeneration refers to the progressive loss of structure or function of neurons, including death of neurons, and is a hallmark of various neurodegenerative diseases."
        },
        "evidence_phrase": "There is evidence that reactive astrocyte biomarkers, linked to neuroinflammation, contribute to the process of neurodegeneration."
      },
      {
        "cause": {
          "type": "Neuroinflammation",
          "name": "reactive astrocyte biomarkers",
          "explanation": "Reactive astrocytes are a sign of neuroinflammation, which can contribute to cognitive decline."
        },
        "effect": {
          "type": "Cognitive Decline",
          "name": "cognitive impairment",
          "explanation": "Cognitive impairment refers to a decline in cognitive functions, and can be a result of various underlying pathologies."
        },
        "evidence_phrase": "Reactive astrocytes, indicative of neuroinflammation, can lead to cognitive impairment."
      }
    ],
    "biomarkers": [
      {
        "type": "Amyloid Pathology",
        "name": "Aβ",
        "explanation": "Aβ refers to amyloid-beta peptides that are considered significant in Alzheimer's disease pathology due to plaque formation."
      },
      {
        "type": "Tau Pathology",
        "name": "tau",
        "explanation": "Tau proteins are involved in the formation of neurofibrillary tangles, which are characteristic of Alzheimer's disease."
      },
      {
        "type": "Neuroinflammation",
        "name": "reactive astrocyte biomarkers",
        "explanation": "Biomarkers related to astrocyte activity, indicative of brain inflammation and reaction to amyloid and tau pathology."
      },
      {
        "type": "Neurodegeneration",
        "name": "neurodegeneration",
        "explanation": "The progressive loss of structure or function of neurons, including their death, significant in Alzheimer's disease."
      },
      {
        "type": "Cognitive Decline",
        "name": "cognitive impairment",
        "explanation": "A decline in cognitive function, including memory and thinking, which is symptomatic of Alzheimer's disease."
      }
    ]
  },
  {
    "id": "0_49_514",
    "title": "Paper 0_49_514",
    "refined_relations": [],
    "biomarkers": []
  },
  {
    "id": "0_49_190",
    "title": "Paper 0_49_190",
    "refined_relations": [],
    "biomarkers": []
  },
  {
    "id": "2_50_42",
    "title": "Paper 2_50_42",
    "refined_relations": [],
    "biomarkers": []
  },
  {
    "id": "2_71_13",
    "title": "Paper 2_71_13",
    "refined_relations": [],
    "biomarkers": [
      {
        "type": "Cognitive Decline",
        "name": "cognitive performance",
        "explanation": "The outcome of various cognitive functions measured through different tasks and their impact on memory formation and overall cognition."
      },
      {
        "type": "Cognitive Decline",
        "name": "memory formation",
        "explanation": "The process of encoding, storing, and retrieving information, crucial for learning and retaining new information."
      },
      {
        "type": "Neurodegeneration",
        "name": "hippocampus",
        "explanation": "A critical brain region involved in memory formation and majorly affected in Alzheimer's Disease."
      },
      {
        "type": "Neurodegeneration",
        "name": "default mode network (DMN)",
        "explanation": "A network of brain regions that show low levels of activity when a person is not focused on the outside world, and its deactivation is linked with improved cognitive performance."
      }
    ]
  },
  {
    "id": "3_99_45",
    "title": "Paper 3_99_45",
    "refined_relations": [],
    "biomarkers": []
  },
  {
    "id": "0_49_1053",
    "title": "Paper 0_49_1053",
    "refined_relations": [],
    "biomarkers": []
  },
  {
    "id": "3_33_34",
    "title": "Paper 3_33_34",
    "refined_relations": [
      {
        "cause": {
          "type": "Neuroinflammation",
          "name": "TNF-α",
          "explanation": "TNF-α (Tumor Necrosis Factor-alpha) is a cytokine involved in systemic inflammation and stimulates the acute phase reaction. It is part of the inflammatory response in neurodegenerative diseases."
        },
        "effect": {
          "type": "Vascular Pathology",
          "name": "VCAM-1",
          "explanation": "VCAM-1 (Vascular Cell Adhesion Molecule 1) is a protein expressed on the surface of endothelial cells in response to cytokines like TNF-α and plays a role in the adhesion of leukocytes to the endothelium, contributing to vascular inflammation."
        },
        "evidence_phrase": "TNF-α induces the expression of VCAM-1, contributing to vascular inflammation."
      },
      {
        "cause": {
          "type": "Neuroinflammation",
          "name": "TNF-α",
          "explanation": "TNF-α is a pro-inflammatory cytokine involved in a variety of processes, including cell signaling and immune responses."
        },
        "effect": {
          "type": "Neuroinflammation",
          "name": "ICAM-1",
          "explanation": "ICAM-1 is an intercellular adhesion molecule that is induced by inflammatory cytokines and plays a role in leukocyte recruitment and inflammation."
        },
        "evidence_phrase": "TNF-α induces ICAM-1 expression, suggesting a role in inflammatory processes."
      },
      {
        "cause": {
          "type": "Gene",
          "name": "iNOS",
          "explanation": "iNOS (inducible nitric oxide synthase) is an enzyme responsible for the production of nitric oxide (NO) in response to inflammatory signals."
        },
        "effect": {
          "type": "Gene",
          "name": "nitric oxide (NO)",
          "explanation": "Nitric oxide (NO) is a signaling molecule produced by iNOS that plays a role in various cellular processes, including inflammation and vasodilation."
        },
        "evidence_phrase": "The enzyme iNOS produces nitric oxide (NO) as a part of the inflammatory response."
      },
      {
        "cause": {
          "type": "Gene",
          "name": "iNOS",
          "explanation": "Inducible nitric oxide synthase (iNOS) is an enzyme responsible for the production of nitric oxide (NO), a signaling molecule involved in various physiological and pathological processes."
        },
        "effect": {
          "type": "Gene",
          "name": "COX-2",
          "explanation": "Cyclooxygenase-2 (COX-2) is an enzyme that is involved in the conversion of arachidonic acid to prostaglandins, which are mediators of inflammation and pain."
        },
        "evidence_phrase": "iNOS induces the expression and activity of COX-2, leading to increased production of pro-inflammatory prostaglandins."
      },
      {
        "cause": {
          "type": "Neuroinflammation",
          "name": "NF-κB",
          "explanation": "NF-κB is a protein complex that plays a key role in regulating the immune response to infection. It is involved in cellular responses to stimuli such as stress, cytokines, free radicals, and bacterial or viral antigens."
        },
        "effect": {
          "type": "Neuroinflammation",
          "name": "TNF-α",
          "explanation": "TNF-α is a cell signaling protein (cytokine) involved in systemic inflammation and is one of the cytokines that make up the acute phase reaction in response to inflammation. It is produced chiefly by activated macrophages, although it can be produced by many other cell types including CD4+ lymphocytes, natural killer (NK) cells, neutrophils, mast cells, eosinophils, and neurons."
        },
        "evidence_phrase": "NF-κB activation leads to the production of pro-inflammatory cytokines such as TNF-α."
      },
      {
        "cause": {
          "type": "Gene",
          "name": "LPS",
          "explanation": "Lipopolysaccharide (LPS); a component of the outer membrane of Gram-negative bacteria that can trigger inflammation."
        },
        "effect": {
          "type": "Gene",
          "name": "STAT1",
          "explanation": "Signal Transducer and Activator of Transcription 1 (STAT1); a transcription factor that is phosphorylated in response to inflammatory stimuli."
        },
        "evidence_phrase": "LPS induces phosphorylation of STAT1."
      },
      {
        "cause": {
          "type": "Neuroinflammation",
          "name": "LPS",
          "explanation": "LPS, or lipopolysaccharide, is known to induce inflammation and activate various signaling pathways in cells."
        },
        "effect": {
          "type": "Gene",
          "name": "STAT3",
          "explanation": "STAT3 phosphorylation is a key event in the signaling pathway that leads to inflammation and other cellular responses."
        },
        "evidence_phrase": "LPS induces STAT3 phosphorylation as part of the signaling cascade involved in inflammatory responses."
      }
    ],
    "biomarkers": [
      {
        "type": "Drug",
        "name": "Withaferin A (WA)",
        "explanation": "A compound found in W. somnifera that has anti-inflammatory effects and inhibits pathways involved in neuroinflammation and vascular pathology."
      },
      {
        "type": "Neuroinflammation",
        "name": "Nitric Oxide",
        "explanation": "A molecule involved in inflammation, the production of which is inhibited by WA."
      },
      {
        "type": "Neuroinflammation",
        "name": "COX-2",
        "explanation": "An enzyme involved in inflammation, its expression and subsequent production of PGE2 is inhibited by WA."
      },
      {
        "type": "Neuroinflammation",
        "name": "Prostaglandin E2 (PGE2)",
        "explanation": "A product of COX-2 activity involved in inflammatory responses, production of which is inhibited by WA."
      },
      {
        "type": "Neuroinflammation",
        "name": "Inducible Nitric Oxide Synthase (iNOS)",
        "explanation": "An enzyme that produces nitric oxide, inhibited by WA."
      },
      {
        "type": "Neuroinflammation",
        "name": "NF-κB",
        "explanation": "A transcription factor activated in response to inflammatory signals, inhibited by WA."
      },
      {
        "type": "Vascular Pathology",
        "name": "Intracellular Adhesion Molecule (ICAM)-1",
        "explanation": "A molecule involved in inflammation and vascular response, inhibited by WA."
      },
      {
        "type": "Vascular Pathology",
        "name": "Vascular Cell Adhesion Molecule (VCAM)-1",
        "explanation": "A molecule involved in inflammation and vascular response, inhibited by WA."
      },
      {
        "type": "Neuroinflammation",
        "name": "Tumor Necrosis Factor Alpha (TNF-α)",
        "explanation": "A cytokine involved in inflammation, production reduced by WA."
      }
    ]
  },
  {
    "id": "3_14_25",
    "title": "Paper 3_14_25",
    "refined_relations": [],
    "biomarkers": [
      {
        "type": "Tau Pathology",
        "name": "Tau Pathology",
        "explanation": "A neuropathological hallmark of Alzheimer's Disease, involving abnormal accumulation of tau protein in the brain."
      }
    ]
  },
  {
    "id": "2_75_2",
    "title": "Paper 2_75_2",
    "refined_relations": [
      {
        "cause": {
          "type": "Amyloid Pathology",
          "name": "Aβ",
          "explanation": "Aβ, or amyloid-beta, is a peptide that accumulates in the brains of individuals with Alzheimer's disease, forming plaques that are thought to disrupt cell-to-cell communication and activate immune system cells, which trigger inflammation and devour disabled cells."
        },
        "effect": {
          "type": "Neurodegeneration",
          "name": "synapse loss",
          "explanation": "Synapse loss refers to the reduction in the number of connections between neurons, which is a critical aspect of neurodegenerative diseases such as Alzheimer's. It leads to cognitive decline and is a predictor of disease severity."
        },
        "evidence_phrase": "The accumulation of Aβ is associated with synapse loss in Alzheimer's disease models."
      },
      {
        "cause": {
          "type": "Amyloid Pathology",
          "name": "Aβ",
          "explanation": "Aβ refers to amyloid-beta, which is a peptide that aggregates to form plaques found in the brains of individuals with Alzheimer's disease."
        },
        "effect": {
          "type": "Neurodegeneration",
          "name": "neuron loss",
          "explanation": "Neuron loss refers to the degeneration or death of neurons, which can lead to a decline in brain function and is observed in various neurodegenerative diseases, including Alzheimer's."
        },
        "evidence_phrase": "Accumulation of Aβ in the brain is associated with neuronal loss, contributing to neurodegeneration and cognitive decline."
      },
      {
        "cause": {
          "type": "Neurodegeneration",
          "name": "synapse loss",
          "explanation": "Synapse loss refers to the reduction in the number of synapses, the connections between neurons, in the brain, which can lead to neuronal and cognitive dysfunction."
        },
        "effect": {
          "type": "Neurodegeneration",
          "name": "cortical tissue loss",
          "explanation": "Cortical tissue loss involves the loss of neuronal tissue in the cortex of the brain, often due to neurodegenerative processes or brain injury."
        },
        "evidence_phrase": "Synapse loss contributes to cortical tissue loss through degradation of neural connections leading to overall brain atrophy."
      },
      {
        "cause": {
          "type": "Neurodegeneration",
          "name": "neuron loss",
          "explanation": "Neuron loss is the loss of neurons, which can lead to brain atrophy and contributes to neurodegeneration."
        },
        "effect": {
          "type": "Neurodegeneration",
          "name": "cortical tissue loss",
          "explanation": "Cortical tissue loss refers to the atrophy or thinning of the cortical regions of the brain, often due to neurodegenerative processes."
        },
        "evidence_phrase": "Neuron loss leads to cortical tissue loss."
      },
      {
        "cause": {
          "type": "Amyloid Pathology",
          "name": "Aβ",
          "explanation": "Aβ refers to amyloid-beta peptide accumulation, which is a hallmark of Alzheimer's disease pathology."
        },
        "effect": {
          "type": "Tau Pathology",
          "name": "hyperphosphorylated tau",
          "explanation": "Hyperphosphorylated tau refers to tau proteins that have undergone abnormal phosphorylation, leading to the formation of neurofibrillary tangles."
        },
        "evidence_phrase": "Studies have shown that Aβ accumulation can lead to tau hyperphosphorylation, which forms neurofibrillary lesions."
      },
      {
        "cause": {
          "type": "Tau Pathology",
          "name": "neurofibrillary lesions",
          "explanation": "Neurofibrillary lesions are aggregations of hyperphosphorylated tau protein in the brain, which are a hallmark of several neurodegenerative diseases, including Alzheimer's disease. These lesions disrupt neuronal function and contribute to the degeneration of brain tissue."
        },
        "effect": {
          "type": "Tau Pathology",
          "name": "PET-detected tau",
          "explanation": "PET-detected tau refers to the ability to visualize and measure tau protein aggregates in the brain using positron emission tomography (PET) imaging. This biomarker allows for the assessment of tau pathology in living patients."
        },
        "evidence_phrase": "The presence of neurofibrillary lesions, which are composed of hyperphosphorylated tau, can be detected using PET imaging that targets tau aggregates, thus the cause 'neurofibrillary lesions' can lead to the effect 'PET-detected tau'."
      },
      {
        "cause": {
          "type": "Amyloid Pathology",
          "name": "Aβ",
          "explanation": "Aβ refers to amyloid-beta, a protein involved in the formation of amyloid plaques, a hallmark of Alzheimer's disease related to amyloid pathology."
        },
        "effect": {
          "type": "Cognitive Decline",
          "name": "cognitive performance",
          "explanation": "Cognitive performance refers to an individual's ability to perform tasks that require thinking, understanding, learning, and remembering."
        },
        "evidence_phrase": "Studies have shown that increased accumulation of Aβ in the brain is associated with declines in cognitive performance."
      }
    ],
    "biomarkers": [
      {
        "type": "Amyloid Pathology",
        "name": "Aβ-triggered loss",
        "explanation": "Aβ-triggered loss of synapses and neurons leads to brain injury in Alzheimer's disease."
      },
      {
        "type": "Tau Pathology",
        "name": "hyperphosphorylated tau-containing neurofibrillary lesions",
        "explanation": "Lesions formed by hyperphosphorylated tau protein linked to neurodegeneration."
      },
      {
        "type": "Cognitive Decline",
        "name": "cognitive performance",
        "explanation": "Performance in cognitive tasks, which correlates with measures of Aβ and tau pathology."
      }
    ]
  },
  {
    "id": "2_40_52",
    "title": "Paper 2_40_52",
    "refined_relations": [
      {
        "cause": {
          "type": "Gene",
          "name": "APOE*ε4 carrier status",
          "explanation": "APOE*ε4 carrier status refers to the presence of the epsilon 4 variant of the Apolipoprotein E gene, which is a genetic risk factor for Alzheimer's disease. Individuals with the APOE*ε4 allele are more likely to develop elevated levels of amyloid-beta in the brain."
        },
        "effect": {
          "type": "Amyloid Pathology",
          "name": "elevated brain amyloid",
          "explanation": "Elevated brain amyloid refers to increased levels of amyloid-beta plaques in the brain, a hallmark of Alzheimer's disease."
        },
        "evidence_phrase": "APOE*ε4 allele leads to an increased risk of elevated brain amyloid levels in individuals."
      }
    ],
    "biomarkers": [
      {
        "type": "Drug",
        "name": "CNP520",
        "explanation": "CNP520 is a drug evaluated for its ability to delay diagnosis to MCI and improve cognitive function in individuals at risk of Alzheimer's."
      },
      {
        "type": "Cognitive Decline",
        "name": "MCI",
        "explanation": "Mild Cognitive Impairment is a condition where individuals experience a decline in cognitive abilities, which may lead to Alzheimer's."
      },
      {
        "type": "Gene",
        "name": "APOE*ε4",
        "explanation": "APOE*ε4 is an allele associated with increased risk of late-onset Alzheimer's disease. Individuals can be homozygous or heterozygous carriers."
      },
      {
        "type": "Amyloid Pathology",
        "name": "Elevated brain amyloid",
        "explanation": "Elevated brain amyloid refers to increased levels of amyloid plaques in the brain, which are characteristic of early Alzheimer's pathology."
      }
    ]
  },
  {
    "id": "3_39_14",
    "title": "Paper 3_39_14",
    "refined_relations": [
      {
        "cause": {
          "type": "Gene",
          "name": "NMDA-R",
          "explanation": "NMDA receptors (NMDA-R) are a type of ionotropic glutamate receptor that controls the flow of calcium ions (Ca²⁺) across the cell membrane."
        },
        "effect": {
          "type": "Gene",
          "name": "intracellular Ca²⁺",
          "explanation": "Intracellular Ca²⁺ refers to the calcium ions present within a cell. The influx of Ca²⁺ into a cell can have various downstream effects, including signaling cascades and activation of cellular processes."
        },
        "evidence_phrase": "Activation of NMDA-R regulates the influx of Ca²⁺ into the cell, increasing intracellular Ca²⁺ levels."
      },
      {
        "cause": {
          "type": "Gene",
          "name": "AMPA-R",
          "explanation": "AMPA receptors (AMPA-R) are a type of ionotropic glutamate receptor that mediate fast synaptic transmission in the central nervous system. They are important for synaptic plasticity and are permeable to sodium and, in some subunits, calcium ions."
        },
        "effect": {
          "type": "Metabolism",
          "name": "intracellular Ca²⁺",
          "explanation": "Intracellular calcium (Ca²⁺) refers to the calcium ions present within the cells. Calcium influx and intracellular calcium levels are critical for various cellular processes including signaling, neurotransmitter release, and muscle contraction."
        },
        "evidence_phrase": "Activation of AMPA receptors leads to the opening of ion channels, allowing for the influx of sodium and, in some cases, calcium ions, thus increasing intracellular calcium levels."
      },
      {
        "cause": {
          "type": "Gene",
          "name": "VGCC",
          "explanation": "Voltage-gated calcium channels (VGCC) are a group of channels located in the cell membrane that allow the entry of calcium ions into the excitable cells and play critical roles in various cellular functions by regulating Ca²⁺ influx."
        },
        "effect": {
          "type": "Metabolism",
          "name": "intracellular Ca²⁺",
          "explanation": "Intracellular Ca²⁺ refers to the concentration of calcium ions within the cell. This concentration is tightly regulated and controlled, often by channels such as VGCCs that mediate the influx of Ca²⁺ into the cell, impacting numerous cellular processes."
        },
        "evidence_phrase": "VGCCs regulate the influx of Ca²⁺ into cells, thereby controlling intracellular Ca²⁺ levels."
      },
      {
        "cause": {
          "type": "Gene",
          "name": "TRPC",
          "explanation": "TRPC (Transient Receptor Potential Canonical) channels are a group of ion channels located on the cell membrane that contribute to the regulation of calcium influx into the cell in response to various stimuli."
        },
        "effect": {
          "type": "Metabolism",
          "name": "intracellular Ca²⁺",
          "explanation": "Intracellular calcium (Ca²⁺) influx is a crucial process for numerous cellular activities. It refers to the movement of calcium ions from the extracellular space or intracellular stores into the cytoplasm. This process is tightly regulated by various channels and receptors."
        },
        "evidence_phrase": "TRPC channels regulate the influx of Ca²⁺ into the intracellular space."
      },
      {
        "cause": {
          "type": "Gene",
          "name": "IP₃R",
          "explanation": "Inositol 1,4,5-trisphosphate receptor (IP₃R) located on the endoplasmic reticulum membrane, which is a channel that mediates the release of calcium ions (Ca²⁺) from the ER into the cytoplasm when it binds to its ligand, IP₃."
        },
        "effect": {
          "type": "Neuroinflammation",
          "name": "ER Ca²⁺ stores",
          "explanation": "Calcium (Ca²⁺) stores within the endoplasmic reticulum, significant for cellular calcium homeostasis, which is crucial for various cellular functions including signaling."
        },
        "evidence_phrase": "IP₃R activation leads to the release of calcium ions from the endoplasmic reticulum stores into the cytoplasm."
      },
      {
        "cause": {
          "type": "Gene",
          "name": "RyR",
          "explanation": "RyR (Ryanodine Receptor) is involved in the release of calcium ions (Ca²⁺) from the endoplasmic reticulum (ER)."
        },
        "effect": {
          "type": "Metabolism",
          "name": "intracellular Ca²⁺",
          "explanation": "Intracellular Ca²⁺ refers to calcium ions within the cell, where release from the ER increases their concentration."
        },
        "evidence_phrase": "RyR releases Ca²⁺ from the ER, leading to an increase in intracellular calcium concentration."
      }
    ],
    "biomarkers": []
  },
  {
    "id": "0_51_14",
    "title": "Paper 0_51_14",
    "refined_relations": [],
    "biomarkers": [
      {
        "type": "Cognitive Decline",
        "name": "Mild Cognitive Impairment",
        "explanation": "A clinically defined risk syndrome in which normal cognition and dementia cannot be sharply separated."
      },
      {
        "type": "Neurodegeneration",
        "name": "Dementia",
        "explanation": "A condition marked by a decline in cognitive function which imaging biomarkers help predict its progression."
      }
    ]
  },
  {
    "id": "0_52_862",
    "title": "Paper 0_52_862",
    "refined_relations": [],
    "biomarkers": [
      {
        "type": "Neurodegeneration",
        "name": "Alzheimer's Disease",
        "explanation": "A progressive neurodegenerative disorder characterized mainly by cognitive decline and tissue damage linked to the buildup of amyloid plaques and tau tangles."
      },
      {
        "type": "Amyloid Pathology",
        "name": "Aβ peptide",
        "explanation": "A peptide linked to the amyloid plaques observed in Alzheimer's Disease."
      }
    ]
  },
  {
    "id": "0_37_40",
    "title": "Paper 0_37_40",
    "refined_relations": [
      {
        "cause": {
          "type": "Gene",
          "name": "APOE",
          "explanation": "APOE is a gene that influences the metabolism of cholesterol and is known to have alleles (such as APOE ε4) associated with increased risk of Alzheimer's disease and amyloid deposition in the brain."
        },
        "effect": {
          "type": "Amyloid Pathology",
          "name": "total brain Aβ levels",
          "explanation": "Total brain Aβ levels refer to the overall amount of amyloid-beta peptides in the brain, which are a key molecular marker of amyloid pathology in Alzheimer's disease."
        },
        "evidence_phrase": "APOE influences the total brain Aβ levels, particularly with the presence of the APOE ε4 allele, which is known to increase amyloid deposition."
      },
      {
        "cause": {
          "type": "Gene",
          "name": "APOE",
          "explanation": "APOE is a gene that encodes a protein involved in lipid metabolism and is known to influence amyloid-beta (Aβ) aggregation and deposition in the brain."
        },
        "effect": {
          "type": "Amyloid Pathology",
          "name": "total brain Aβ levels",
          "explanation": "Total brain Aβ levels refer to the amount of amyloid-beta peptides present in the entire brain, which are implicated in the formation of amyloid plaques."
        },
        "evidence_phrase": "APOE–Aβ interaction increases total brain Aβ levels by influencing aggregation and deposition processes."
      },
      {
        "cause": {
          "type": "Drug",
          "name": "Aβ12-28 peptide",
          "explanation": "An intervention peptide that affects amyloid-beta processes."
        },
        "effect": {
          "type": "Amyloid Pathology",
          "name": "total brain Aβ levels",
          "explanation": "The overall amount of amyloid-beta in the brain."
        },
        "evidence_phrase": "Aβ12-28 peptide reduces total brain Aβ levels."
      },
      {
        "cause": {
          "type": "Drug",
          "name": "Aβ12-28 peptide",
          "explanation": "Aβ12-28 peptide is a peptide that potentially interacts with amyloid beta processing or aggregation to impact Aβ plaques."
        },
        "effect": {
          "type": "Amyloid Pathology",
          "name": "Aβ plaques",
          "explanation": "Aβ plaques refer to extracellular deposits primarily composed of amyloid beta peptides, which are a hallmark of Alzheimer's disease pathology."
        },
        "evidence_phrase": "Aβ12-28 peptide reduces Aβ plaques."
      },
      {
        "cause": {
          "type": "Amyloid Pathology",
          "name": "Aβ",
          "explanation": "Aβ (Amyloid beta) is a protein fragment that accumulates to form amyloid plaques in the brains of Alzheimer's patients. It's also involved in cerebrovascular amyloid angiopathy (CAA), where Aβ deposits in the walls of the blood vessels of the central nervous system."
        },
        "effect": {
          "type": "Amyloid Pathology",
          "name": "CAA burden",
          "explanation": "CAA (Cerebral Amyloid Angiopathy) burden refers to the extent of amyloid-beta deposition in the walls of cerebral blood vessels, which can lead to vessel damage and increase the risk of hemorrhage."
        },
        "evidence_phrase": "Aβ12-28 peptide treatment is believed to reduce the burden of cerebrovascular amyloid angiopathy in Alzheimer's disease models by interfering with amyloid-beta aggregation and deposition in blood vessels."
      },
      {
        "cause": {
          "type": "Gene",
          "name": "APOE",
          "explanation": "APOE is a gene associated with cholesterol metabolism and influences Alzheimer's disease risk, particularly the ε4 allele which affects amyloid processing."
        },
        "effect": {
          "type": "Amyloid Pathology",
          "name": "Aβ plaques",
          "explanation": "Aβ plaques are aggregates of amyloid-beta peptides that accumulate in the extracellular space in the brain and are a hallmark of Alzheimer's disease pathology."
        },
        "evidence_phrase": "APOE ε4 variant increases amyloid-beta plaque accumulation in the brain."
      }
    ],
    "biomarkers": [
      {
        "type": "Gene",
        "name": "APOE",
        "explanation": "APOE is essential for amyloid deposition in mice, suggesting its role in amyloid pathology."
      },
      {
        "type": "Amyloid Pathology",
        "name": "Aβ plaques",
        "explanation": "Aβ plaques are aggregations of amyloid-beta in the brain, associated with Alzheimer's disease."
      },
      {
        "type": "Cognitive Decline",
        "name": "Memory performance",
        "explanation": "Improved memory performance indicates a reduction in cognitive decline associated with Alzheimer's disease."
      },
      {
        "type": "Drug",
        "name": "Aβ12-28 synthetic peptide",
        "explanation": "A synthetic peptide that reduces brain amyloid levels and improves memory performance in mouse models."
      }
    ]
  },
  {
    "id": "3_58_18",
    "title": "Paper 3_58_18",
    "refined_relations": [],
    "biomarkers": [
      {
        "type": "Neuroinflammation",
        "name": "YKL-40",
        "explanation": "YKL-40 is a protein involved in the activation of innate immune cells and is found in astrocytes within the central nervous system."
      },
      {
        "type": "Neuroinflammation",
        "name": "GFAP",
        "explanation": "GFAP is a protein that serves as a marker for astrocytes in the brain."
      },
      {
        "type": "Neuroinflammation",
        "name": "IBA-1",
        "explanation": "IBA-1 is a protein marker for microglial cells in the brain."
      }
    ]
  },
  {
    "id": "1_79_10",
    "title": "Paper 1_79_10",
    "refined_relations": [],
    "biomarkers": []
  },
  {
    "id": "2_70_55",
    "title": "Paper 2_70_55",
    "refined_relations": [],
    "biomarkers": [
      {
        "type": "Neurodegeneration",
        "name": "Putamen Atrophy",
        "explanation": "Reduction in volumes of the putamen observed in patients with probable Alzheimer's Disease."
      },
      {
        "type": "Neurodegeneration",
        "name": "Bilateral Putamen Atrophy",
        "explanation": "Atrophy occurs in both sides of the putamen but is more pronounced in the lateral area of the left putamen with disease progression."
      },
      {
        "type": "Neurodegeneration",
        "name": "Anterior Dorsal and Ventral Putamen Shape Changes",
        "explanation": "Bilateral shape changes in the anterior dorsal and ventral putamen observed in patients with Early-Onset Alzheimer's Disease."
      }
    ]
  },
  {
    "id": "3_87_31",
    "title": "Paper 3_87_31",
    "refined_relations": [
      {
        "cause": {
          "type": "Gene",
          "name": "TREM2",
          "explanation": "A gene associated with the risk of Alzheimer's disease that may influence inflammatory response and microglial activation."
        },
        "effect": {
          "type": "Tau Pathology",
          "name": "Tau",
          "explanation": "Hyperphosphorylated protein that forms tangles within neurons, associated with Alzheimer's disease."
        },
        "evidence_phrase": "Recent studies suggest that mutations in TREM2 can exacerbate tau pathology by impairing microglial function."
      }
    ],
    "biomarkers": [
      {
        "type": "Gene",
        "name": "TREM2",
        "explanation": "Triggering receptor expressed on myeloid cells 2 (TREM2), expressed in myeloid cells including microglia, is implicated in AD and shows risk with the R47H variant."
      },
      {
        "type": "Neurodegeneration",
        "name": "Neurodegenerative lesions",
        "explanation": "Lesions that arise in the context of neurodegeneration and are influenced by factors such as microglial response and Aβ."
      },
      {
        "type": "Amyloid Pathology",
        "name": "Aβ accumulation",
        "explanation": "Accumulation of amyloid-beta in the brain that triggers microglial response and affects neurodegeneration."
      },
      {
        "type": "Tau Pathology",
        "name": "Tau accumulation",
        "explanation": "Associated with the loss of TREM2, leading to tau spread in models, indicating a connection to AD pathology."
      },
      {
        "type": "Neuroinflammation",
        "name": "Microglial activation",
        "explanation": "Microglia response, potentially attenuating or accelerating neurodegeneration based on activation state."
      }
    ]
  },
  {
    "id": "2_62_12",
    "title": "Paper 2_62_12",
    "refined_relations": [],
    "biomarkers": [
      {
        "type": "Tau Pathology",
        "name": "Tauopathy",
        "explanation": "Accumulation of tau proteins in the brain, particularly in medial temporal lobes."
      },
      {
        "type": "Amyloid Pathology",
        "name": "b-amyloidosis",
        "explanation": "Deposition of beta-amyloid plaques in the cortical or neocortical areas."
      },
      {
        "type": "Neurodegeneration",
        "name": "Neurodegeneration",
        "explanation": "Progressive loss of structure or function of neurons, often used as a biomarker for Alzheimer's Disease."
      },
      {
        "type": "Amyloid Pathology",
        "name": "Amyloid PET",
        "explanation": "Imaging technique using positron emission tomography to detect amyloid plaques in the brain."
      },
      {
        "type": "Tau Pathology",
        "name": "Tau PET",
        "explanation": "Positron emission tomography scan to assess tau protein distribution in the brain."
      }
    ]
  },
  {
    "id": "3_75_5",
    "title": "Paper 3_75_5",
    "refined_relations": [],
    "biomarkers": []
  },
  {
    "id": "2_2_8",
    "title": "Paper 2_2_8",
    "refined_relations": [],
    "biomarkers": [
      {
        "type": "Amyloid Pathology",
        "name": "Aβ accumulation",
        "explanation": "Aβ accumulation is a hallmark of amyloid pathology, commonly evaluated in Alzheimer's disease research."
      },
      {
        "type": "Neurodegeneration",
        "name": "neurodegeneration",
        "explanation": "Neurodegeneration refers to the progressive loss of structure or function of neurons, often observed in neurodegenerative diseases like Alzheimer's."
      },
      {
        "type": "Cognitive Decline",
        "name": "cognitive performance",
        "explanation": "Cognitive performance reflects the mental processes involved in gaining knowledge and comprehension, often assessed in Alzheimer's research to study cognitive decline."
      }
    ]
  },
  {
    "id": "3_27_44",
    "title": "Paper 3_27_44",
    "refined_relations": [],
    "biomarkers": []
  },
  {
    "id": "0_49_30",
    "title": "Paper 0_49_30",
    "refined_relations": [],
    "biomarkers": [
      {
        "type": "Neurodegeneration",
        "name": "AD",
        "explanation": "Alzheimer's Disease, characterized by neurodegenerative processes."
      },
      {
        "type": "Neuroinflammation",
        "name": "inflammation",
        "explanation": "Exacerbated inflammation involved in the Alzheimer's neurodegenerative process."
      },
      {
        "type": "Gene",
        "name": "phospholipids",
        "explanation": "Phospholipids measured in peripheral blood that predict the risk of amnestic MCI or AD."
      },
      {
        "type": "Cognitive Decline",
        "name": "cognitive decline",
        "explanation": "Reduction in cognitive abilities, associated with the progression or risk of AD."
      },
      {
        "type": "Metabolism",
        "name": "fatty acids",
        "explanation": "Long-chain n-3 polyunsaturated fatty acids linked to AD risk and cognitive decline."
      },
      {
        "type": "Metabolism",
        "name": "antioxidant vitamins C and E",
        "explanation": "Nutrients associated with slower cognitive decline."
      },
      {
        "type": "Metabolism",
        "name": "carotenoids",
        "explanation": "Nutrients with potential beneficial effects on cognitive decline."
      },
      {
        "type": "Metabolism",
        "name": "polyphenols",
        "explanation": "Dietary components associated with reduced AD risk."
      },
      {
        "type": "Metabolism",
        "name": "vitamins B and D",
        "explanation": "Linked to a lower risk of AD and cognitive decline."
      }
    ]
  },
  {
    "id": "2_37_0",
    "title": "Paper 2_37_0",
    "refined_relations": [],
    "biomarkers": [
      {
        "type": "Neurodegeneration",
        "name": "Alzheimer's disease",
        "explanation": "Alzheimer's disease is the most common type of dementia and is associated with neurodegenerative processes."
      },
      {
        "type": "Neurodegeneration",
        "name": "neurodegenerative diseases",
        "explanation": "Neurodegenerative diseases, including Alzheimer's, involve the progressive degeneration of neurons in the brain."
      },
      {
        "type": "Metabolism",
        "name": "regular physical activity (PA)",
        "explanation": "Regular physical activity involves bodily movements produced by muscles that expend energy, contributing to health benefits."
      }
    ]
  },
  {
    "id": "1_58_61",
    "title": "Paper 1_58_61",
    "refined_relations": [],
    "biomarkers": []
  },
  {
    "id": "3_50_44",
    "title": "Paper 3_50_44",
    "refined_relations": [],
    "biomarkers": []
  },
  {
    "id": "1_5_9",
    "title": "Paper 1_5_9",
    "refined_relations": [],
    "biomarkers": [
      {
        "type": "Cognitive Decline",
        "name": "Subtle Cognitive Decline",
        "explanation": "Refers to the decrease in cognitive abilities that can be observed even before the emergence of noticeable impairments."
      },
      {
        "type": "Neurodegeneration",
        "name": "Biomarkers",
        "explanation": "Biomarkers such as proteins or molecules in the brain are used to provide evidence of neurodegeneration and track AD-related changes prior to cognitive symptoms."
      }
    ]
  },
  {
    "id": "2_65_15",
    "title": "Paper 2_65_15",
    "refined_relations": [],
    "biomarkers": [
      {
        "type": "Drug",
        "name": "[18 F]-AV-1451",
        "explanation": "A PET imaging agent used to measure tau pathology in various brain regions."
      },
      {
        "type": "Tau Pathology",
        "name": "AD cortical signature [18 F]-AV-1451 SUVR",
        "explanation": "A surrogate marker for tau pathology associated with Alzheimer's disease, reflecting tau deposition in specific cortical regions."
      }
    ]
  },
  {
    "id": "0_4_32",
    "title": "Paper 0_4_32",
    "refined_relations": [],
    "biomarkers": []
  },
  {
    "id": "0_2_39",
    "title": "Paper 0_2_39",
    "refined_relations": [],
    "biomarkers": [
      {
        "type": "Drug",
        "name": "HDACis",
        "explanation": "Histone deacetylase inhibitors, reported to improve cognition in animal models of Alzheimer's Disease."
      },
      {
        "type": "Cognitive Decline",
        "name": "improved cognition",
        "explanation": "Enhanced cognitive function was observed in the animal models of Alzheimer's Disease upon administration of HDACis."
      }
    ]
  },
  {
    "id": "3_64_17",
    "title": "Paper 3_64_17",
    "refined_relations": [
      {
        "cause": {
          "type": "Amyloid Pathology",
          "name": "Aβ",
          "explanation": "Aβ, or amyloid beta, is a peptide that aggregates to form amyloid plaques, a hallmark of Alzheimer's disease. It is part of amyloid pathology and affects various cellular receptors and responses."
        },
        "effect": {
          "type": "Neuroinflammation",
          "name": "TLR4",
          "explanation": "TLR4, or Toll-like receptor 4, is a protein that plays a critical role in the innate immune system. It is associated with recognizing pathogens and mediating inflammatory responses, linking it to neuroinflammation processes when activated by amyloid-beta."
        },
        "evidence_phrase": "Aβ (amyloid beta) is known to interact with TLR4, leading to neuroinflammatory responses."
      },
      {
        "cause": {
          "type": "Amyloid Pathology",
          "name": "Aβ",
          "explanation": "Amyloid beta (Aβ) is a peptide that accumulates in the brains of Alzheimer's disease patients and contributes to the disease pathology."
        },
        "effect": {
          "type": "Neuroinflammation",
          "name": "TLR2",
          "explanation": "Toll-like receptor 2 (TLR2) is part of the innate immune system and is involved in recognizing pathogens and triggering inflammatory responses."
        },
        "evidence_phrase": "Aβ interacts with TLR2, activating inflammatory pathways."
      },
      {
        "cause": {
          "type": "Amyloid Pathology",
          "name": "Aβ",
          "explanation": "Aβ refers to Amyloid-beta, a peptide that aggregates to form plaques found in the brains of people with Alzheimer's disease, and has been implicated in neuroinflammation and neuronal toxicity."
        },
        "effect": {
          "type": "Gene",
          "name": "CD14",
          "explanation": "CD14 is a co-receptor (along with TLR4 and MD-2) for the detection of bacterial lipopolysaccharide (LPS). It is expressed in macrophages and is involved in innate immune response. It can also mediate inflammatory responses to amyloid-beta."
        },
        "evidence_phrase": "Studies have shown that Aβ can activate immune responses involving CD14, suggesting a role for CD14 in mediating inflammation related to amyloid pathology."
      },
      {
        "cause": {
          "type": "Gene",
          "name": "TLRs",
          "explanation": "Toll-like receptors (TLRs) are a class of proteins that play a key role in the innate immune system. They are single, membrane-spanning receptors usually expressed on sentinel cells such as macrophages and dendritic cells that recognize structurally conserved molecules derived from microbes. They play a role in inflammation and are involved in the response to amyloid-beta (Aβ), a biomarker associated with Alzheimer's disease."
        },
        "effect": {
          "type": "Amyloid Pathology",
          "name": "Aβ42",
          "explanation": "Aβ42 is a peptide that is derived from the amyloid-beta precursor protein. It is one of the main components of amyloid plaques found in the brains of patients with Alzheimer's disease. Accumulation of Aβ42 is associated with the pathogenesis of Alzheimer's disease."
        },
        "evidence_phrase": "TLRs contribute to the production and accumulation of Aβ42."
      },
      {
        "cause": {
          "type": "Gene",
          "name": "TLRs",
          "explanation": "Toll-like receptors (TLRs) are a class of proteins that play a key role in the innate immune system. They recognize pathogens and activate immune cell responses."
        },
        "effect": {
          "type": "Neuroinflammation",
          "name": "IL-6",
          "explanation": "Interleukin 6 (IL-6) is a cytokine that is involved in inflammation and the maturation of B cells. It is a pro-inflammatory cytokine that has been shown to be upregulated in response to activation of immune receptors such as TLRs."
        },
        "evidence_phrase": "TLRs, when activated by their ligands, can lead to the production of pro-inflammatory cytokines such as IL-6."
      },
      {
        "cause": {
          "type": "Neuroinflammation",
          "name": "TLRs",
          "explanation": "Toll-like receptors (TLRs) are a class of proteins that play a key role in the innate immune system. They are membrane receptors that recognize structurally conserved molecules derived from microbes."
        },
        "effect": {
          "type": "Neuroinflammation",
          "name": "IL-1β",
          "explanation": "Interleukin-1 beta (IL-1β) is a pro-inflammatory cytokine produced by activated macrophages as a proprotein, which is proteolytically processed to its active form."
        },
        "evidence_phrase": "Activation of Toll-like receptors (TLRs) on immune cells can lead to the production of pro-inflammatory cytokines, such as IL-1β."
      },
      {
        "cause": {
          "type": "Neuroinflammation",
          "name": "TLRs",
          "explanation": "Toll-like receptors (TLRs) are a class of proteins that play a key role in the innate immune system. They are usually expressed by sentinel cells such as macrophages and dendritic cells, that recognize structurally conserved molecules derived from microbes. They can also react to endogeneous danger signals, and have been implicated in neuroinflammatory responses in the brain."
        },
        "effect": {
          "type": "Neuroinflammation",
          "name": "TNF-α",
          "explanation": "Tumor necrosis factor alpha (TNF-α) is a cytokine involved in systemic inflammation and is part of the body's acute phase reaction. It is produced chiefly by activated macrophages, although it can be produced by many other cells, including CD4+ lymphocytes, NK cells, neutrophils, mast cells, eosinophils, as well as neurons. TNF-α has been involved in a variety of signaling events within cells, leading to necrosis or apoptosis."
        },
        "evidence_phrase": "TLRs (Toll-like receptors) activation can lead to the production of inflammatory cytokines including TNF-α as part of the immune response."
      }
    ],
    "biomarkers": [
      {
        "type": "Neuroinflammation",
        "name": "TLR4",
        "explanation": "TLR4 is overexpressed in AD brains and essential for Aβ-induced activation of microglia, playing a role in neuroinflammatory responses."
      },
      {
        "type": "Amyloid Pathology",
        "name": "Aβ42",
        "explanation": "Aβ42 is recognized by TLRs, leading to inflammatory responses and is associated with amyloid deposits in Alzheimer's disease."
      },
      {
        "type": "Neuroinflammation",
        "name": "IL-6",
        "explanation": "IL-6, released upon TLRs activation by Aβ, contributes to inflammation and neuronal damage."
      },
      {
        "type": "Neuroinflammation",
        "name": "IL-1β",
        "explanation": "IL-1β is a pro-inflammatory cytokine released by TLR activation, contributing to AD-related neuroinflammation."
      },
      {
        "type": "Neuroinflammation",
        "name": "TNF-α",
        "explanation": "TNF-α is released by activated TLRs, leading to neuroinflammation and neuronal damage."
      },
      {
        "type": "Amyloid Pathology",
        "name": "Aβ",
        "explanation": "Aβ (beta-amyloid) is a neurotoxic protein that aggregates in the brain, contributing to amyloid plaques in Alzheimer's disease."
      },
      {
        "type": "Gene",
        "name": "TLR2",
        "explanation": "TLR2 is part of the TLRs group necessary for Aβ-induced microglial activation in Alzheimer's Disease."
      },
      {
        "type": "Gene",
        "name": "CD14",
        "explanation": "CD14, along with TLR4 and TLR2, plays a role in the activation of microglia by Aβ plaques, influencing neuroinflammation in Alzheimer's Disease."
      }
    ]
  },
  {
    "id": "0_49_724",
    "title": "Paper 0_49_724",
    "refined_relations": [],
    "biomarkers": []
  },
  {
    "id": "2_4_6",
    "title": "Paper 2_4_6",
    "refined_relations": [],
    "biomarkers": [
      {
        "type": "Gene",
        "name": "Acetylcholine",
        "explanation": "Neurotransmitter involved in promoting neuroplasticity and modulating cortical sensory maps."
      },
      {
        "type": "Neurodegeneration",
        "name": "Cholinergic lesion",
        "explanation": "Damage to cholinergic neurons, which may disrupt synaptic transmission and cerebral haemodynamic processes."
      },
      {
        "type": "Vascular Pathology",
        "name": "Cerebral vasodilation",
        "explanation": "The process where blood vessels in the brain widen, improving blood flow, promoted by the cholinergic system."
      },
      {
        "type": "Neurodegeneration",
        "name": "Neuroplasticity",
        "explanation": "The ability of the brain to reorganize itself, which is affected by cholinergic system functions."
      }
    ]
  },
  {
    "id": "2_54_14",
    "title": "Paper 2_54_14",
    "refined_relations": [
      {
        "cause": {
          "type": "Gene",
          "name": "Estrogen",
          "explanation": "Estrogen is a hormone that can influence the activity of neurotransmitters in the brain."
        },
        "effect": {
          "type": "Metabolism",
          "name": "Neurotransmitters",
          "explanation": "Neurotransmitters are chemicals in the brain that transmit signals between neurons."
        },
        "evidence_phrase": "Estrogen influences the activity and levels of neurotransmitters in the brain."
      },
      {
        "cause": {
          "type": "Gene",
          "name": "Estrogen",
          "explanation": "Estrogen is a hormone that is believed to play a role in brain function and protection, especially in women. It has been suggested that estrogen can influence amyloid-beta deposition."
        },
        "effect": {
          "type": "Amyloid Pathology",
          "name": "Aβ",
          "explanation": "Amyloid-beta is a peptide that aggregates to form plaques, which are considered a hallmark of Alzheimer's disease."
        },
        "evidence_phrase": "Research indicates that estrogen may influence the production or clearance of amyloid-beta, potentially affecting its accumulation in the brain."
      },
      {
        "cause": {
          "type": "Metabolism",
          "name": "Estrogen",
          "explanation": "Estrogen is a hormone that plays a role in various physiological processes, including metabolism and regulation of other biological functions."
        },
        "effect": {
          "type": "Tau Pathology",
          "name": "Tau",
          "explanation": "Tau protein is associated with microtubule stabilization, and its hyperphosphorylated form is a hallmark of neurodegenerative diseases like Alzheimer's."
        },
        "evidence_phrase": "Estrogen is hypothesized to influence the pathology of tau by affecting processes related to neuronal protection and metabolism, which can impact tau phosphorylation and aggregation."
      }
    ],
    "biomarkers": [
      {
        "type": "Gene",
        "name": "Estrogen",
        "explanation": "A sex hormone that may play a role in neuroprotection and cognitive function."
      },
      {
        "type": "Neurodegeneration",
        "name": "Cell death",
        "explanation": "A process that estrogen may mitigate in the context of AD-related toxicity."
      },
      {
        "type": "Amyloid Pathology",
        "name": "Ab accumulation",
        "explanation": "A condition that estrogen may help reduce, associated with Alzheimer's disease."
      },
      {
        "type": "Tau Pathology",
        "name": "Tau hyperphosphorylation",
        "explanation": "A process related to Alzheimer's that estrogen may help mitigate."
      },
      {
        "type": "Cognitive Decline",
        "name": "Cognition",
        "explanation": "Aspects that observational studies suggest estrogen replacement may improve."
      }
    ]
  },
  {
    "id": "2_14_20",
    "title": "Paper 2_14_20",
    "refined_relations": [],
    "biomarkers": [
      {
        "type": "Neurodegeneration",
        "name": "RSC dysfunction",
        "explanation": "Dysfunction of the Retrosplenial Cortex (RSC) in early Alzheimer's Disease."
      },
      {
        "type": "Cognitive Decline",
        "name": "difficulty translating between allocentric and egocentric reference frames",
        "explanation": "Patients with Alzheimer's Disease struggle with spatial navigation tasks."
      }
    ]
  },
  {
    "id": "2_39_2",
    "title": "Paper 2_39_2",
    "refined_relations": [
      {
        "cause": {
          "type": "Neuroinflammation",
          "name": "inflammation",
          "explanation": "General bodily response to harmful stimuli, often involving immune cells and inflammatory cytokines."
        },
        "effect": {
          "type": "Vascular Pathology",
          "name": "Cerebral blood flow (CBF)",
          "explanation": "The blood supply to the brain in a given amount of time, crucial for delivering nutrients and oxygen to brain tissue."
        },
        "evidence_phrase": "Inflammation can lead to altered cerebral blood flow through various mechanisms, including the release of cytokines and other mediators affecting vascular function."
      },
      {
        "cause": {
          "type": "Neurodegeneration",
          "name": "oxidative stress",
          "explanation": "Oxidative stress refers to the imbalance between the production of free radicals and the body's ability to counteract their harmful effects. It is known to cause damage to cellular components, which can lead to various forms of neurodegeneration and affect cerebral blood flow."
        },
        "effect": {
          "type": "Vascular Pathology",
          "name": "Cerebral blood flow (CBF)",
          "explanation": "Cerebral blood flow (CBF) refers to the blood supply to the brain in a given period of time. It is crucial for maintaining brain function and is affected by various pathological conditions, including those involving oxidative stress."
        },
        "evidence_phrase": "Oxidative stress can impair cerebral blood flow by damaging blood vessels and affecting vascular function."
      },
      {
        "cause": {
          "type": "Vascular Pathology",
          "name": "nitric oxide deficit",
          "explanation": "Nitric oxide is a vasodilator that plays a critical role in maintaining cerebral blood flow by relaxing blood vessels. A deficit in nitric oxide can lead to reduced blood flow to the brain."
        },
        "effect": {
          "type": "Vascular Pathology",
          "name": "Cerebral blood flow (CBF)",
          "explanation": "Cerebral blood flow is the blood supply to the brain. It is essential for delivering nutrients and oxygen to brain tissue."
        },
        "evidence_phrase": "Nitric oxide is crucial for vasodilation and maintaining proper cerebral blood flow; its deficit can lead to impaired blood flow to the brain."
      }
    ],
    "biomarkers": [
      {
        "type": "Vascular Pathology",
        "name": "Neurovascular Unit Impairment",
        "explanation": "A disrupted neurovascular unit is linked to a cascade of adverse effects, potentially contributing to Alzheimer's Disease."
      },
      {
        "type": "Neuroinflammation",
        "name": "Inflammation",
        "explanation": "Inflammation occurs within the brain and is implicated in the impairment of the neurovascular unit, exacerbating Alzheimer's disease progression."
      },
      {
        "type": "Neurodegeneration",
        "name": "Neurodegeneration",
        "explanation": "Chronic neurovascular impairment eventually leads to neurodegeneration, contributing to symptoms of dementia."
      },
      {
        "type": "Cognitive Decline",
        "name": "Cognitive Decline",
        "explanation": "The progressive damage to the neurovascular unit and related processes result in cognitive decline seen in Alzheimer's Disease."
      }
    ]
  },
  {
    "id": "2_93_17",
    "title": "Paper 2_93_17",
    "refined_relations": [
      {
        "cause": {
          "type": "Vascular Pathology",
          "name": "Hypertensive pregnancy disorders (HPD)",
          "explanation": "Hypertensive pregnancy disorders (HPD) such as preeclampsia have been associated with cerebrovascular changes that can contribute to brain structural changes."
        },
        "effect": {
          "type": "Neurodegeneration",
          "name": "Brain atrophy",
          "explanation": "Brain atrophy refers to the loss of neurons and the connections between them, often associated with neurodegenerative processes."
        },
        "evidence_phrase": "Hypertensive pregnancy disorders are linked to an increased risk of brain atrophy later in life due to cerebrovascular and possibly neurodegenerative changes."
      },
      {
        "cause": {
          "type": "Vascular Pathology",
          "name": "Hypertensive pregnancy disorders (HPD)",
          "explanation": "Hypertensive pregnancy disorders (HPD) are known to affect vascular health, which could lead to changes in the brain such as white matter hyperintensities due to altered blood flow or increased vascular pressure."
        },
        "effect": {
          "type": "Neurodegeneration",
          "name": "White matter hyperintensities",
          "explanation": "White matter hyperintensities represent areas of increased signal on MRI scans, often related to changes in the small vessels of the brain, which can be linked to various vascular conditions."
        },
        "evidence_phrase": "There is evidence linking hypertensive pregnancy disorders with an increased risk of white matter hyperintensities later in life due to vascular changes."
      }
    ],
    "biomarkers": [
      {
        "type": "Vascular Pathology",
        "name": "Hypertensive Pregnancy Disorders (HPD)",
        "explanation": "HPD includes gestational hypertension, preeclampsia, eclampsia, chronic hypertension, and preeclampsia or eclampsia superimposed on chronic hypertension."
      },
      {
        "type": "Cognitive Decline",
        "name": "Subjective Cognitive Complaints",
        "explanation": "Cognitive issues reported by individuals, potentially linked with HPD."
      },
      {
        "type": "Cognitive Decline",
        "name": "Brain Atrophy",
        "explanation": "Reduction in brain volume observed in women with a history of HPD."
      },
      {
        "type": "Neurodegeneration",
        "name": "White Matter Hyperintensities",
        "explanation": "Brain lesions that are more prevalent in those with a history of HPD."
      }
    ]
  },
  {
    "id": "3_55_45",
    "title": "Paper 3_55_45",
    "refined_relations": [],
    "biomarkers": [
      {
        "type": "Vascular Pathology",
        "name": "Cerebrovascular Disease",
        "explanation": "A disorder affecting the blood vessels supplying the brain, which may influence Alzheimer's Disease progression."
      },
      {
        "type": "Gene",
        "name": "Genetic Studies",
        "explanation": "Research involving genetic factors that could provide insights into the mechanisms of Alzheimer's Disease."
      },
      {
        "type": "Cognitive Decline",
        "name": "Alzheimer's Disease",
        "explanation": "A degenerative cognitive disorder characterized by memory loss and confusion, often linked with various biological and genetic factors."
      }
    ]
  },
  {
    "id": "3_98_29",
    "title": "Paper 3_98_29",
    "refined_relations": [
      {
        "cause": {
          "type": "Amyloid Pathology",
          "name": "CSF Aβ42",
          "explanation": "CSF Aβ42 is a measurable biomarker indicating levels of amyloid-beta in cerebrospinal fluid. Lower levels are associated with amyloid plaque deposition in the brain."
        },
        "effect": {
          "type": "Amyloid Pathology",
          "name": "Aβ deposition",
          "explanation": "Aβ deposition refers to the accumulation of amyloid-beta plaques in the brain, a hallmark of Alzheimer's disease."
        },
        "evidence_phrase": "CSF Aβ42 levels correlate with brain Aβ deposition, where lower CSF Aβ42 suggests increased plaque deposition."
      }
    ],
    "biomarkers": [
      {
        "type": "Amyloid Pathology",
        "name": "Aβ deposition",
        "explanation": "Aβ deposition is considered the earliest hallmark of Alzheimer's Disease (AD)."
      },
      {
        "type": "Amyloid Pathology",
        "name": "CSF Aβ42 concentration",
        "explanation": "The concentration of Aβ42 in cerebrospinal fluid (CSF) serves as a biomarker for Aβ pathology in Alzheimer's Disease."
      }
    ]
  },
  {
    "id": "1_43_23",
    "title": "Paper 1_43_23",
    "refined_relations": [
      {
        "cause": {
          "type": "Drug",
          "name": "Huperzine A",
          "explanation": "Huperzine A is a naturally occurring sesquiterpene alkaloid compound that is known to inhibit the enzyme acetylcholinesterase (AChE)."
        },
        "effect": {
          "type": "Gene",
          "name": "AChE",
          "explanation": "Acetylcholinesterase (AChE) is an enzyme that breaks down the neurotransmitter acetylcholine in the synaptic cleft, thus terminating synaptic transmission."
        },
        "evidence_phrase": "Huperzine A is known to inhibit AChE."
      },
      {
        "cause": {
          "type": "Drug",
          "name": "Huperzine A",
          "explanation": "Huperzine A, a natural sesquiterpene compound, acts as an acetylcholinesterase inhibitor and is often investigated for its protective roles on neurons and potential effects on APP processing."
        },
        "effect": {
          "type": "Gene",
          "name": "APP",
          "explanation": "APP (Amyloid precursor protein) is crucial in the pathogenesis of Alzheimer's disease due to its cleavage resulting in beta-amyloid plaque formation."
        },
        "evidence_phrase": "Huperzine A impacts the processing of Amyloid Precursor Protein (APP)."
      },
      {
        "cause": {
          "type": "Drug",
          "name": "Huperzine A",
          "explanation": "Huperzine A is a drug that acts as a cholinesterase inhibitor and is known to influence neurotransmitter systems, including the NMDA receptor pathways."
        },
        "effect": {
          "type": "Gene",
          "name": "NMDA receptors",
          "explanation": "NMDA receptors are a type of receptor for glutamate that play a crucial role in neural communication, synaptic plasticity, and cognitive processes."
        },
        "evidence_phrase": "Huperzine A is known to interact with NMDA receptors as part of its effect on the central nervous system, often enhancing cognitive function by modulating these receptors."
      }
    ],
    "biomarkers": [
      {
        "type": "Drug",
        "name": "Huperzine A",
        "explanation": "A compound extracted from the Chinese plant Huperzia serrata, known for inhibiting acetylcholinesterase and potentially influencing Alzheimer's Disease treatment."
      },
      {
        "type": "Metabolism",
        "name": "APP metabolism",
        "explanation": "Involves the processing pathways of amyloid precursor protein, which is related to Alzheimer's Disease pathology."
      },
      {
        "type": "Metabolism",
        "name": "non-amyloidogenic α-secretase pathway",
        "explanation": "A pathway in APP metabolism that does not lead to amyloid beta formation, potentially protective against Alzheimer's Disease."
      },
      {
        "type": "Cognitive Decline",
        "name": "cognitive measures",
        "explanation": "Refers to metrics used to assess cognitive performance, often measured in Alzheimer's Disease research."
      }
    ]
  },
  {
    "id": "3_65_26",
    "title": "Paper 3_65_26",
    "refined_relations": [],
    "biomarkers": []
  },
  {
    "id": "0_54_118",
    "title": "Paper 0_54_118",
    "refined_relations": [],
    "biomarkers": []
  },
  {
    "id": "1_70_36",
    "title": "Paper 1_70_36",
    "refined_relations": [],
    "biomarkers": [
      {
        "type": "Drug",
        "name": "RAGE antagonists",
        "explanation": "RAGE antagonists are believed to be beneficial in treating several conditions, potentially including Alzheimer's Disease."
      },
      {
        "type": "Drug",
        "name": "PF-04494700 (TTP488)",
        "explanation": "PF-04494700 is a drug under investigation for its efficacy and safety in treating Alzheimer's Disease."
      }
    ]
  },
  {
    "id": "2_73_34",
    "title": "Paper 2_73_34",
    "refined_relations": [],
    "biomarkers": [
      {
        "type": "Amyloid Pathology",
        "name": "Aβ1-42 peptide",
        "explanation": "A component of the AN-1792 Alzheimer vaccine, associated with Alzheimer's amyloid pathology."
      },
      {
        "type": "Drug",
        "name": "AN-1792",
        "explanation": "A synthetic full-length Aβ1-42 peptide vaccine tested for Alzheimer's treatment in mild-to-moderate patients."
      },
      {
        "type": "Drug",
        "name": "QS-21",
        "explanation": "An adjuvant used in combination with AN-1792 for Alzheimer's vaccine."
      },
      {
        "type": "Neuroinflammation",
        "name": "meningoencephalitis",
        "explanation": "A serious adverse effect noted in 6% of patients during AN-1792 vaccine trials, leading to discontinuation."
      },
      {
        "type": "Drug",
        "name": "CAD106",
        "explanation": "An Alzheimer's vaccine in active trials, using Aβ1-6 peptide to induce a B-cell response without a T-cell response."
      },
      {
        "type": "Amyloid Pathology",
        "name": "Aβ1-6 peptide",
        "explanation": "A component of CAD106, designed to provoke an immune response for Alzheimer’s treatment."
      },
      {
        "type": "Cognitive Decline",
        "name": "cognitively unimpaired subjects",
        "explanation": "The current target population for the CAD106 vaccine, potentially affected by Alzheimer's."
      },
      {
        "type": "Gene",
        "name": "ApoE4",
        "explanation": "A genetic variant linked to a higher risk for Alzheimer's, targeted in CAD106 trials."
      }
    ]
  },
  {
    "id": "3_88_54",
    "title": "Paper 3_88_54",
    "refined_relations": [
      {
        "cause": {
          "type": "Amyloid Pathology",
          "name": "Aβ",
          "explanation": "Aβ refers to Amyloid-beta, a peptide involved in the formation of amyloid plaques, which are a hallmark of Alzheimer's Disease pathology."
        },
        "effect": {
          "type": "Neuroinflammation",
          "name": "microglia activation",
          "explanation": "Microglia activation refers to the activation of microglial cells, which are the resident immune cells in the central nervous system. This activation is often a response to pathological events including the presence of amyloid plaques."
        },
        "evidence_phrase": "Research suggests that the presence of amyloid-beta plaques can lead to the activation of microglia, a type of immune cell in the brain, which is involved in neuroinflammation."
      },
      {
        "cause": {
          "type": "Amyloid Pathology",
          "name": "Aβ",
          "explanation": "Aβ, or Amyloid beta, is a peptide that aggregates into plaques in the brain and is a hallmark of Alzheimer's disease pathology."
        },
        "effect": {
          "type": "Vascular Pathology",
          "name": "microhaemorrhages",
          "explanation": "Microhaemorrhages are small bleeds in the brain and are considered a type of vascular damage that can be associated with various brain pathologies, including those associated with amyloid."
        },
        "evidence_phrase": "There is evidence suggesting that the accumulation of amyloid beta (Aβ) in the brain can lead to the occurrence of microhaemorrhages, potentially due to vascular damage associated with amyloid deposits."
      }
    ],
    "biomarkers": [
      {
        "type": "Amyloid Pathology",
        "name": "Aβ deposition",
        "explanation": "Deposition of toxic β-amyloid peptide in the brain that affects the neurovascular unit."
      },
      {
        "type": "Vascular Pathology",
        "name": "Hypertension",
        "explanation": "A condition that exacerbates Alzheimer's disease pathologies, affecting microvascular structures and the blood-brain barrier."
      },
      {
        "type": "Neuroinflammation",
        "name": "Microglia activation",
        "explanation": "Activation of microglia due to hypertension-induced blood-brain barrier disruption, contributing to amyloid plaque formation."
      },
      {
        "type": "Neurodegeneration",
        "name": "Neuronal toxicity",
        "explanation": "Toxic effects on neurons due to formation of amyloid plaques and hypertension-related vascular impairment."
      },
      {
        "type": "Neurodegeneration",
        "name": "Capillary atrophy and regression",
        "explanation": "Loss and regression of capillaries leading to ghost vessel formation, impairing cerebral blood flow."
      },
      {
        "type": "Vascular Pathology",
        "name": "Blood-brain barrier disruption",
        "explanation": "Disruption of the blood-brain barrier linked to microvascular damage and hypertension."
      },
      {
        "type": "Cognitive Decline",
        "name": "Brain dysfunction",
        "explanation": "Cognitive dysfunction resulting from a chain of vascular and inflammatory events in Alzheimer's disease."
      }
    ]
  },
  {
    "id": "3_2_10",
    "title": "Paper 3_2_10",
    "refined_relations": [
      {
        "cause": {
          "type": "Gene",
          "name": "MMP-3",
          "explanation": "MMP-3 (Matrix metallopeptidase 3) is an enzyme associated with the breakdown of extracellular matrix components and is implicated in various pathological processes, including inflammation and tissue remodeling."
        },
        "effect": {
          "type": "Cognitive Decline",
          "name": "Cognitive decline",
          "explanation": "Cognitive decline refers to the deterioration in cognitive function, which can include aspects like memory, attention, and decision-making. It is often observed in neurodegenerative conditions such as Alzheimer's disease."
        },
        "evidence_phrase": "Studies have suggested that increased levels of MMP-3 are associated with the progression of cognitive decline, possibly due to its role in neuroinflammation and tissue remodeling, affecting neural integrity."
      }
    ],
    "biomarkers": [
      {
        "type": "Gene",
        "name": "MMP-3",
        "explanation": "Alteration in MMP-3 has been shown to be sex-specific and is associated with cognitive decline and Alzheimer's Disease pathology."
      },
      {
        "type": "Cognitive Decline",
        "name": "cognitive decline",
        "explanation": "Cognitive decline is associated with level alterations in MMP-3."
      },
      {
        "type": "Neurodegeneration",
        "name": "AD pathology",
        "explanation": "Alzheimer's Disease pathology linked to alterations in the MMP-3 level."
      }
    ]
  },
  {
    "id": "3_99_43",
    "title": "Paper 3_99_43",
    "refined_relations": [],
    "biomarkers": []
  },
  {
    "id": "2_9_64",
    "title": "Paper 2_9_64",
    "refined_relations": [],
    "biomarkers": []
  },
  {
    "id": "3_22_38",
    "title": "Paper 3_22_38",
    "refined_relations": [],
    "biomarkers": [
      {
        "type": "Amyloid Pathology",
        "name": "Ab42/40",
        "explanation": "Ab42/40 isoforms are analyzed as biomarkers of Alzheimer's Disease core pathologies."
      },
      {
        "type": "Tau Pathology",
        "name": "pTau",
        "explanation": "pTau isoforms are analyzed as biomarkers of Alzheimer's Disease core pathologies."
      }
    ]
  },
  {
    "id": "1_99_33",
    "title": "Paper 1_99_33",
    "refined_relations": [
      {
        "cause": {
          "type": "Gene",
          "name": "BACE-1",
          "explanation": "BACE-1 (Beta-site APP-cleaving enzyme 1) is an enzyme that cleaves the amyloid precursor protein (APP) to produce the Aβ peptide."
        },
        "effect": {
          "type": "Amyloid Pathology",
          "name": "Aβ peptide",
          "explanation": "Aβ peptide is a fragment that is generated from the cleavage of amyloid precursor protein (APP) and is associated with the formation of amyloid plaques in Alzheimer's disease."
        },
        "evidence_phrase": "BACE-1 cleaves APP to produce the Aβ peptide, a key component in amyloid plaque formation."
      },
      {
        "cause": {
          "type": "Gene",
          "name": "APP",
          "explanation": "Amyloid precursor protein (APP) is cleaved to produce Aβ peptide."
        },
        "effect": {
          "type": "Amyloid Pathology",
          "name": "Aβ peptide",
          "explanation": "Aβ peptide is a product derived from the cleavage of amyloid precursor protein (APP)."
        },
        "evidence_phrase": "APP cleavage results in the formation of Aβ peptide."
      }
    ],
    "biomarkers": [
      {
        "type": "Gene",
        "name": "BACE-1",
        "explanation": "A novel transmembrane aspartate protease responsible for cleaving APP at the β-secretase site, leading to the production of Aβ peptide."
      },
      {
        "type": "Amyloid Pathology",
        "name": "Aβ peptide",
        "explanation": "A peptide produced in the brain as a result of APP cleavage by β-secretase."
      },
      {
        "type": "Drug",
        "name": "β-secretase inhibitors",
        "explanation": "Therapeutic agents targeting β-secretase to prevent the production of Aβ peptide."
      }
    ]
  },
  {
    "id": "0_17_15",
    "title": "Paper 0_17_15",
    "refined_relations": [],
    "biomarkers": []
  },
  {
    "id": "1_22_47",
    "title": "Paper 1_22_47",
    "refined_relations": [
      {
        "cause": {
          "type": "Gene",
          "name": "APP",
          "explanation": "APP is the precursor protein that, when cleaved, produces Aβ peptides."
        },
        "effect": {
          "type": "Amyloid Pathology",
          "name": "Aβ peptides",
          "explanation": "Aβ peptides are derived from the cleavage of APP and are involved in the formation of amyloid plaques in Alzheimer's disease."
        },
        "evidence_phrase": "APP is cleaved to form Aβ peptides."
      },
      {
        "cause": {
          "type": "Amyloid Pathology",
          "name": "Aβ peptides",
          "explanation": "Amyloid-beta (Aβ) peptides are protein fragments that accumulate in the brains of Alzheimer's disease patients, forming plaques that are characteristic of the disease pathology."
        },
        "effect": {
          "type": "Cognitive Decline",
          "name": "Cognitive decline",
          "explanation": "Cognitive decline refers to the deterioration in cognitive function, which can be caused by various factors including neurodegenerative diseases such as Alzheimer's."
        },
        "evidence_phrase": "The accumulation of Aβ peptides in the brain is associated with the progression of cognitive decline, suggesting a link between amyloid pathology and deteriorating cognitive functions."
      },
      {
        "cause": {
          "type": "Gene",
          "name": "β-Secretase",
          "explanation": "β-Secretase is an enzyme that cleaves amyloid precursor protein (APP) to produce Aβ peptides."
        },
        "effect": {
          "type": "Amyloid Pathology",
          "name": "Aβ peptides",
          "explanation": "Aβ peptides are produced from the cleavage of amyloid precursor protein (APP) by enzymes such as β-Secretase."
        },
        "evidence_phrase": "β-Secretase is known to cleave APP into Aβ peptides, which are implicated in amyloid pathology."
      }
    ],
    "biomarkers": [
      {
        "type": "Gene",
        "name": "APP",
        "explanation": "Amyloid precursor protein (APP) involved in Alzheimer’s disease."
      },
      {
        "type": "Gene",
        "name": "rs63750847 SNP",
        "explanation": "A rare variant associated with decreased risk of Alzheimer's Disease and cognitive decline."
      },
      {
        "type": "Amyloid Pathology",
        "name": "Aβ peptides",
        "explanation": "Amyloid-beta peptides associated with amyloid pathology in Alzheimer’s disease."
      },
      {
        "type": "Cognitive Decline",
        "name": "Late-Onset Alzheimer's Disease (LOAD)",
        "explanation": "A form of Alzheimer’s Disease that typically develops later in life."
      }
    ]
  },
  {
    "id": "0_52_215",
    "title": "Paper 0_52_215",
    "refined_relations": [],
    "biomarkers": []
  },
  {
    "id": "1_24_11",
    "title": "Paper 1_24_11",
    "refined_relations": [
      {
        "cause": {
          "type": "Gene",
          "name": "SORL1",
          "explanation": "SORL1 is a gene that encodes a sorting receptor involved in the trafficking and processing of the amyloid precursor protein (APP), influencing its pathway towards amyloid beta production."
        },
        "effect": {
          "type": "Gene",
          "name": "APP",
          "explanation": "APP is a gene that encodes the amyloid precursor protein, which is cleaved to form amyloid beta peptides implicated in Alzheimer's disease pathology."
        },
        "evidence_phrase": "SORL1 is implicated in the processing and trafficking of APP, affecting amyloid beta levels."
      },
      {
        "cause": {
          "type": "Gene",
          "name": "SORCS1",
          "explanation": "SORCS1 is a gene that has been implicated in Alzheimer's disease pathology. It may influence the processing or trafficking of APP, which plays a critical role in amyloid-beta production."
        },
        "effect": {
          "type": "Gene",
          "name": "APP",
          "explanation": "APP (Amyloid precursor protein) is a gene that encodes a protein associated with the generation of amyloid-beta, a major component of amyloid plaques found in the brains of individuals with Alzheimer's disease."
        },
        "evidence_phrase": "SORCS1 may modulate APP processing or trafficking, influencing amyloid-beta production."
      }
    ],
    "biomarkers": [
      {
        "type": "Gene",
        "name": "SORL1",
        "explanation": "SORL1 is studied due to its involvement in and interaction with APP sorting and metabolism."
      },
      {
        "type": "Gene",
        "name": "SORCS1",
        "explanation": "SORCS1 is studied due to its involvement in and interaction with APP sorting and metabolism."
      },
      {
        "type": "Amyloid Pathology",
        "name": "APP",
        "explanation": "APP sorting and metabolism are involved in AD genetics, suggesting a role in the amyloid cascade hypothesis."
      }
    ]
  },
  {
    "id": "0_49_833",
    "title": "Paper 0_49_833",
    "refined_relations": [],
    "biomarkers": []
  },
  {
    "id": "1_20_7",
    "title": "Paper 1_20_7",
    "refined_relations": [],
    "biomarkers": [
      {
        "type": "Neurodegeneration",
        "name": "Alzheimer's disease",
        "explanation": "A progressive neurological disorder that results in brain cell death and memory loss."
      },
      {
        "type": "Neurodegeneration",
        "name": "Parkinson's disease",
        "explanation": "A neurodegenerative disorder that affects movement and can cause tremors and stiffness."
      },
      {
        "type": "Neuroinflammation",
        "name": "Retromer",
        "explanation": "A protein complex involved in transport and cargo sorting that has been linked to neurodegenerative disorders."
      }
    ]
  },
  {
    "id": "3_55_3",
    "title": "Paper 3_55_3",
    "refined_relations": [],
    "biomarkers": [
      {
        "type": "Gene",
        "name": "APP",
        "explanation": "A gene where mutations have been linked to familial Alzheimer's Disease (AD)."
      },
      {
        "type": "Gene",
        "name": "PSEN1",
        "explanation": "A gene where mutations have been linked to familial Alzheimer's Disease (AD)."
      },
      {
        "type": "Gene",
        "name": "PSEN2",
        "explanation": "A gene where mutations have been linked to familial Alzheimer's Disease (AD)."
      }
    ]
  },
  {
    "id": "3_85_47",
    "title": "Paper 3_85_47",
    "refined_relations": [],
    "biomarkers": [
      {
        "type": "Drug",
        "name": "Donepezil",
        "explanation": "A drug with 100% bioavailability that enhances cognition and global clinical function in Alzheimer's disease patients."
      },
      {
        "type": "Cognitive Decline",
        "name": "Cognition",
        "explanation": "A mental function that can be impaired in Alzheimer's disease but is improved by Donepezil."
      }
    ]
  },
  {
    "id": "2_36_1",
    "title": "Paper 2_36_1",
    "refined_relations": [],
    "biomarkers": []
  },
  {
    "id": "0_52_482",
    "title": "Paper 0_52_482",
    "refined_relations": [],
    "biomarkers": []
  },
  {
    "id": "1_8_25",
    "title": "Paper 1_8_25",
    "refined_relations": [
      {
        "cause": {
          "type": "Amyloid Pathology",
          "name": "Aβ",
          "explanation": "Aβ (Amyloid beta) is a peptide that aggregates to form plaques found in the brains of people with Alzheimer's disease. These plaques are considered one of the hallmark features of Alzheimer's pathology."
        },
        "effect": {
          "type": "Tau Pathology",
          "name": "Tau",
          "explanation": "Tau is a protein associated with microtubules in neurons. In Alzheimer's disease, tau proteins become hyperphosphorylated, leading to neurofibrillary tangles within neurons."
        },
        "evidence_phrase": "Accumulation of amyloid beta (Aβ) plaques is thought to precede and potentially lead to the development of tau pathology, including tau tangles, in the progression of Alzheimer's disease."
      },
      {
        "cause": {
          "type": "Tau Pathology",
          "name": "Tau",
          "explanation": "Tau is a protein that stabilizes microtubules in neurons. Abnormal tau deposition can lead to neurodegenerative disorders, including Alzheimer's disease."
        },
        "effect": {
          "type": "Neurodegeneration",
          "name": "MRI-volumetry",
          "explanation": "MRI-volumetry is a technique used to measure brain volume and can detect atrophy associated with neurodegenerative diseases like Alzheimer's."
        },
        "evidence_phrase": "Elevated tau deposition is correlated with decreased brain volume as observed in MRI-volumetry scans of Alzheimer's patients."
      },
      {
        "cause": {
          "type": "Gene",
          "name": "APOE-e4",
          "explanation": "APOE-e4 is a genetic variant associated with an increased risk of Alzheimer's disease and is believed to influence the deposition of amyloid-beta (Aβ) plaques in the brain."
        },
        "effect": {
          "type": "Amyloid Pathology",
          "name": "Aβ",
          "explanation": "Aβ refers to amyloid-beta, a protein that accumulates into plaques and is a hallmark of Alzheimer's disease pathology."
        },
        "evidence_phrase": "APOE-e4 is associated with increased deposition of Aβ plaques."
      },
      {
        "cause": {
          "type": "Gene",
          "name": "APOE-e4",
          "explanation": "The APOE-e4 allele is a genetic variant known to influence the risk of Alzheimer's disease and other neurodegenerative conditions."
        },
        "effect": {
          "type": "Tau Pathology",
          "name": "Tau",
          "explanation": "Tau pathology refers to the accumulation of tau protein tangles in the brain, a characteristic of Alzheimer's disease."
        },
        "evidence_phrase": "The presence of the APOE-e4 allele increases the risk and severity of tau pathology in Alzheimer's disease."
      }
    ],
    "biomarkers": [
      {
        "type": "Gene",
        "name": "APOE-e4",
        "explanation": "A static genotypic variant that plays a role in modulating dynamic biomarker temporal relations and serves as a predictive static risk profile."
      },
      {
        "type": "Amyloid Pathology",
        "name": "Ab",
        "explanation": "A dynamic biomarker identified by Jack et al. as part of the temporal order in staging AD."
      },
      {
        "type": "Tau Pathology",
        "name": "Tau",
        "explanation": "A dynamic biomarker related to structural and functional brain changes in the AD pathogenetic process."
      },
      {
        "type": "Neurodegeneration",
        "name": "Structural and functional brain changes",
        "explanation": "Dynamic changes observed in the brain that are related to AD progression."
      },
      {
        "type": "Cognitive Decline",
        "name": "Memory and clinical functions",
        "explanation": "Part of the temporal order of validated dynamic biomarkers for staging AD."
      }
    ]
  },
  {
    "id": "0_31_47",
    "title": "Paper 0_31_47",
    "refined_relations": [
      {
        "cause": {
          "type": "Metabolism",
          "name": "Insulin",
          "explanation": "Insulin is a hormone that regulates glucose levels in the blood, influencing cellular glucose uptake and metabolism."
        },
        "effect": {
          "type": "Metabolism",
          "name": "Norepinephrine",
          "explanation": "Norepinephrine is a neurotransmitter involved in the body's 'fight or flight' response and also plays a role in glucose metabolism."
        },
        "evidence_phrase": "Insulin influences the release and metabolism of norepinephrine, suggesting a metabolic link."
      },
      {
        "cause": {
          "type": "Metabolism",
          "name": "Insulin",
          "explanation": "Insulin is a hormone that regulates glucose levels in the blood and has effects on metabolism, including promoting the uptake of glucose into cells to be used for energy production, which could affect ATP synthesis."
        },
        "effect": {
          "type": "Metabolism",
          "name": "ATP synthesis",
          "explanation": "ATP synthesis is the process by which energy is produced in cells, primarily through oxidative phosphorylation in the mitochondria, and can be influenced by the availability of substrates such as glucose, which is regulated by insulin."
        },
        "evidence_phrase": "Insulin affects ATP synthesis by regulating glucose uptake and metabolism."
      },
      {
        "cause": {
          "type": "Metabolism",
          "name": "Insulin receptor signaling",
          "explanation": "Insulin receptor signaling refers to the pathway activated by the binding of insulin to its receptor, which regulates glucose uptake and metabolism."
        },
        "effect": {
          "type": "Metabolism",
          "name": "Glucose availability",
          "explanation": "Glucose availability refers to the presence of glucose ready to be used by cells for energy production."
        },
        "evidence_phrase": "Insulin receptor signaling plays a role in determining glucose availability in cells."
      }
    ],
    "biomarkers": [
      {
        "type": "Metabolism",
        "name": "Insulin",
        "explanation": "Insulin is involved in the regulation of glucose availability to neurons and has an effect on glucose metabolism."
      },
      {
        "type": "Metabolism",
        "name": "Glucose",
        "explanation": "Glucose metabolism is important as any impairment could lead to ATP synthesis issues, affecting neuronal health."
      },
      {
        "type": "Neurodegeneration",
        "name": "Neuronal apoptosis",
        "explanation": "Impaired glucose metabolism and disruptions in ATP synthesis can lead to neuronal cell death or apoptosis."
      }
    ]
  },
  {
    "id": "2_6_26",
    "title": "Paper 2_6_26",
    "refined_relations": [],
    "biomarkers": []
  },
  {
    "id": "1_31_14",
    "title": "Paper 1_31_14",
    "refined_relations": [
      {
        "cause": {
          "type": "Amyloid Pathology",
          "name": "CSF Aβ 1-42",
          "explanation": "CSF Aβ 1-42 is a cerebrospinal fluid biomarker indicative of amyloid pathology, specifically related to amyloid-beta deposition in the brain."
        },
        "effect": {
          "type": "Amyloid Pathology",
          "name": "Brain amyloid",
          "explanation": "Brain amyloid refers to the accumulation of amyloid-beta plaques in the brain, which is a hallmark of Alzheimer's disease and can be visualized using imaging techniques."
        },
        "evidence_phrase": "CSF Aβ 1-42 is used as a biomarker to infer the presence of amyloid-beta accumulation in the brain, or brain amyloid deposition."
      },
      {
        "cause": {
          "type": "Amyloid Pathology",
          "name": "Amyloid PET",
          "explanation": "Amyloid PET is a neuroimaging biomarker technique used to visualize and quantify the presence of amyloid plaques in the brain, which are indicative of amyloid pathology."
        },
        "effect": {
          "type": "Amyloid Pathology",
          "name": "Brain amyloid",
          "explanation": "Brain amyloid refers to the accumulation of amyloid proteins, typically in the form of plaques, within the brain, which is a hallmark of Alzheimer's disease pathology."
        },
        "evidence_phrase": "Amyloid PET imaging is used to detect and quantify brain amyloid, thus measurements from Amyloid PET serve as an indicator of the level of brain amyloid pathology present."
      },
      {
        "cause": {
          "type": "Amyloid Pathology",
          "name": "Amyloid ligand retention",
          "explanation": "The measurement of amyloid plaques in the brain using imaging techniques like PET with amyloid ligands."
        },
        "effect": {
          "type": "Amyloid Pathology",
          "name": "CSF Aβ 1-42",
          "explanation": "The concentration of amyloid-beta 1-42 peptides in the cerebrospinal fluid, which is inversely related to plaque burden in the brain."
        },
        "evidence_phrase": "Reduction in CSF Aβ 1-42 is related to increased amyloid ligand retention in PET scans."
      },
      {
        "cause": {
          "type": "Amyloid Pathology",
          "name": "Amyloid ligand retention",
          "explanation": "Amyloid ligand retention is typically measured using PET imaging with amyloid ligands, which bind to amyloid plaques in the brain, indicating the presence of amyloid pathology."
        },
        "effect": {
          "type": "Neurodegeneration",
          "name": "CSF T-tau",
          "explanation": "CSF T-tau is a biomarker found in cerebrospinal fluid (CSF) that indicates neurodegeneration, as elevated levels are associated with neuronal damage."
        },
        "evidence_phrase": "Increase in amyloid ligand retention is associated with an increase in CSF T-tau levels, indicating that amyloid pathology may lead to tau-related neurodegeneration."
      }
    ],
    "biomarkers": [
      {
        "type": "Amyloid Pathology",
        "name": "CSF Aβ 1-42",
        "explanation": "Soluble forms of Aβ, where low concentration suggests significant parenchymal deposition."
      },
      {
        "type": "Tau Pathology",
        "name": "CSF T-tau",
        "explanation": "Reflects neuronal degeneration."
      },
      {
        "type": "Tau Pathology",
        "name": "CSF P-tau",
        "explanation": "Reflects hyperphosphorylation of tau in the brain."
      },
      {
        "type": "Amyloid Pathology",
        "name": "PET amyloid retention",
        "explanation": "Significant retention is indicative of amyloidosis, measurable via PET scans."
      },
      {
        "type": "Cognitive Decline",
        "name": "Cognitive impairment",
        "explanation": "Risk of incident impairment identified by biomarker tests."
      }
    ]
  },
  {
    "id": "0_44_4",
    "title": "Paper 0_44_4",
    "refined_relations": [
      {
        "cause": {
          "type": "Metabolism",
          "name": "free radicals",
          "explanation": "Free radicals are molecules with unpaired electrons that can cause damage to cells and tissues by initiating chain reactions that damage cellular components."
        },
        "effect": {
          "type": "Neurodegeneration",
          "name": "oxidative damage",
          "explanation": "Oxidative damage is harm caused to cells and tissues due to the imbalance between the production of free radicals and the ability of the body to counteract their harmful effects."
        },
        "evidence_phrase": "Oxidative damage occurs when free radicals attack and damage cell structures."
      }
    ],
    "biomarkers": [
      {
        "type": "Metabolism",
        "name": "Oxidative Stress",
        "explanation": "Oxidative stress occurs due to an imbalance between the production of free radicals and the body's ability to counteract their harmful effects through neutralization by antioxidants."
      },
      {
        "type": "Metabolism",
        "name": "Antioxidant Repair Systems",
        "explanation": "Antioxidant repair systems are processes in the body that repair the oxidative damage caused by free radicals."
      },
      {
        "type": "Drug",
        "name": "Antioxidants",
        "explanation": "Antioxidants are substances that prevent or delay oxidation of oxidizable substrates such as lipids, proteins, and DNA, thus protecting cells from oxidative damage. They are used as a therapeutic strategy for chronic diseases."
      }
    ]
  },
  {
    "id": "0_52_203",
    "title": "Paper 0_52_203",
    "refined_relations": [],
    "biomarkers": []
  },
  {
    "id": "0_76_52",
    "title": "Paper 0_76_52",
    "refined_relations": [
      {
        "cause": {
          "type": "Neuroinflammation",
          "name": "TNF-alpha",
          "explanation": "TNF-alpha is a pro-inflammatory cytokine involved in neuroinflammation, which can influence synaptic function."
        },
        "effect": {
          "type": "Cognitive Decline",
          "name": "optimal synaptic function",
          "explanation": "Optimal synaptic function is crucial for maintaining cognitive health, and disruptions can lead to cognitive decline."
        },
        "evidence_phrase": "TNF-alpha can influence synaptic function through inflammatory pathways."
      },
      {
        "cause": {
          "type": "Metabolism",
          "name": "serum calcium",
          "explanation": "Serum calcium is essential for various cellular processes, including neuronal function."
        },
        "effect": {
          "type": "Neurodegeneration",
          "name": "neuronal function",
          "explanation": "Neuronal function is dependent on various factors including calcium levels."
        },
        "evidence_phrase": "Research indicates that calcium levels play a crucial role in maintaining proper neuronal function."
      },
      {
        "cause": {
          "type": "Neuroinflammation",
          "name": "TNF-alpha",
          "explanation": "TNF-alpha is a pro-inflammatory cytokine involved in neuroinflammation, which can potentially affect biomarkers found in cerebrospinal fluid."
        },
        "effect": {
          "type": "Vascular Pathology",
          "name": "cerebrospinal fluid (CSF)",
          "explanation": "CSF can contain various biomarkers indicative of different neurological conditions, and its composition can be affected by neuroinflammatory processes."
        },
        "evidence_phrase": "TNF-alpha levels can influence biomarkers in cerebrospinal fluid due to its role in neuroinflammation."
      }
    ],
    "biomarkers": [
      {
        "type": "Neuroinflammation",
        "name": "TNF-alpha",
        "explanation": "A cytokine involved in the inflammatory processes in the brain, thought to affect synaptic function and neuronal health."
      },
      {
        "type": "Neurodegeneration",
        "name": "Alzheimer's disease",
        "explanation": "A progressive neurodegenerative disorder characterized by cognitive decline and loss of neuronal function."
      },
      {
        "type": "Drug",
        "name": "Perispinal etanercept",
        "explanation": "A therapeutic agent used to modulate TNF-alpha levels, potentially benefiting Alzheimer's disease patients by restoring TNF-alpha homeostasis."
      }
    ]
  },
  {
    "id": "1_83_12",
    "title": "Paper 1_83_12",
    "refined_relations": [
      {
        "cause": {
          "type": "Gene",
          "name": "SORL1",
          "explanation": "SORL1 is a gene that has been associated with Alzheimer's disease, and variants in this gene can affect the processing of amyloid precursor protein (APP)."
        },
        "effect": {
          "type": "Gene",
          "name": "APP",
          "explanation": "APP is the amyloid precursor protein, which when cleaved, produces amyloid-beta, a key component in the development of amyloid plaques in Alzheimer's disease."
        },
        "evidence_phrase": "SORL1 variants are implicated in altering the processing of APP, potentially affecting amyloid-beta production."
      },
      {
        "cause": {
          "type": "Gene",
          "name": "CASS4",
          "explanation": "CASS4 is a gene that has been associated with Alzheimer's disease and is thought to play a role in intracellular signaling pathways that can affect the processing of amyloid precursor protein (APP)."
        },
        "effect": {
          "type": "Gene",
          "name": "APP",
          "explanation": "APP (Amyloid precursor protein) is a gene that encodes a protein that is cleaved to form amyloid beta, which is implicated in the formation of amyloid plaques in Alzheimer's disease."
        },
        "evidence_phrase": "CASS4 has been implicated in pathways affecting the processing of APP, suggesting a relationship where CASS4 influences APP metabolism or expression."
      },
      {
        "cause": {
          "type": "Gene",
          "name": "CASS4",
          "explanation": "CASS4 is a genetic biomarker associated with Alzheimer's disease pathology and may be involved in tau pathology."
        },
        "effect": {
          "type": "Tau Pathology",
          "name": "Tau",
          "explanation": "Tau pathology refers to the accumulation and abnormal phosphorylation of tau protein in the brain, a hallmark of Alzheimer's disease."
        },
        "evidence_phrase": "Studies suggest that genetic variations in CASS4 are related to an increase in tau pathology."
      },
      {
        "cause": {
          "type": "Gene",
          "name": "FERMT2",
          "explanation": "FERMT2 is a gene associated with Alzheimer's disease and may play a role in Tau Pathology."
        },
        "effect": {
          "type": "Tau Pathology",
          "name": "Tau",
          "explanation": "Tau pathology involves the abnormal accumulation and spread of tau protein in the brain, a hallmark of Alzheimer's disease."
        },
        "evidence_phrase": "The gene FERMT2 is implicated in Alzheimer's disease, potentially contributing to tau pathology."
      }
    ],
    "biomarkers": [
      {
        "type": "Gene",
        "name": "APOE",
        "explanation": "APOE is a well-established genetic risk factor for Alzheimer's disease."
      },
      {
        "type": "Gene",
        "name": "CR1",
        "explanation": "Identified as a risk locus associated with Alzheimer's disease."
      },
      {
        "type": "Gene",
        "name": "BIN1",
        "explanation": "Identified as a risk locus associated with Alzheimer's disease."
      },
      {
        "type": "Gene",
        "name": "CD2AP",
        "explanation": "Identified as a risk locus associated with Alzheimer's disease."
      },
      {
        "type": "Gene",
        "name": "EPHA1",
        "explanation": "Identified as a risk locus associated with Alzheimer's disease."
      },
      {
        "type": "Gene",
        "name": "CLU",
        "explanation": "Identified as a risk locus associated with Alzheimer's disease."
      },
      {
        "type": "Gene",
        "name": "MS4A6A",
        "explanation": "Identified as a risk locus associated with Alzheimer's disease."
      },
      {
        "type": "Gene",
        "name": "PICALM",
        "explanation": "Identified as a risk locus associated with Alzheimer's disease."
      },
      {
        "type": "Gene",
        "name": "ABCA7",
        "explanation": "Identified as a risk locus associated with Alzheimer's disease."
      },
      {
        "type": "Gene",
        "name": "CD33",
        "explanation": "Identified as a risk locus associated with Alzheimer's disease, though not validated in replication."
      },
      {
        "type": "Gene",
        "name": "HLA-DRB5/HLA-DRB1",
        "explanation": "Novel locus associated with Alzheimer's disease, involved in immune response."
      },
      {
        "type": "Gene",
        "name": "PTK2B",
        "explanation": "Novel locus associated with Alzheimer's disease, involved in cell migration and memory formation."
      },
      {
        "type": "Gene",
        "name": "SORL1",
        "explanation": "Gene modulating APP trafficking and processing, reaching genome-wide significance in Alzheimer's GWAS."
      },
      {
        "type": "Gene",
        "name": "DSG2",
        "explanation": "Failed to replicate and validate as a locus associated with Alzheimer's disease."
      },
      {
        "type": "Tau Pathology",
        "name": "CASS4",
        "explanation": "Involved in APP processing and tau pathology."
      },
      {
        "type": "Tau Pathology",
        "name": "FERMT2",
        "explanation": "Associated with tau pathology."
      },
      {
        "type": "Gene",
        "name": "INPP5D",
        "explanation": "Novel locus associated with Alzheimer's disease, involved in immune response pathways."
      },
      {
        "type": "Gene",
        "name": "MEF2C",
        "explanation": "Associated with limited excessive synapse formation and related cognitive functions."
      },
      {
        "type": "Gene",
        "name": "NME8",
        "explanation": "Suggested involvement in cytoskeletal function and axonal transport."
      },
      {
        "type": "Gene",
        "name": "ZCWPW1",
        "explanation": "Novel susceptibility locus associated with Alzheimer's disease."
      },
      {
        "type": "Gene",
        "name": "CELF1",
        "explanation": "Associated with axonal transport and cytoskeletal function."
      },
      {
        "type": "Gene",
        "name": "FERMT2",
        "explanation": "Associated with tau pathology."
      },
      {
        "type": "Gene",
        "name": "CASS4",
        "explanation": "Involved in APP processing and tau pathology."
      }
    ]
  },
  {
    "id": "3_49_45",
    "title": "Paper 3_49_45",
    "refined_relations": [
      {
        "cause": {
          "type": "Amyloid Pathology",
          "name": "Aβ plaque",
          "explanation": "Aβ plaques are extracellular deposits mainly composed of amyloid-beta peptides, which aggregate in the brain and are a hallmark of Alzheimer's disease."
        },
        "effect": {
          "type": "Amyloid Pathology",
          "name": "iron-amyloid complex",
          "explanation": "Iron-amyloid complexes are formed when iron interacts with amyloid-beta plaques, possibly contributing to oxidative stress and neurotoxicity in Alzheimer's disease."
        },
        "evidence_phrase": "The conversion of Aβ plaques into iron-amyloid complexes suggests a biochemical interaction that may influence disease progression."
      },
      {
        "cause": {
          "type": "Amyloid Pathology",
          "name": "Aβ plaque",
          "explanation": "Aβ plaques are aggregates of beta-amyloid peptides that are associated with Alzheimer's disease and are a key feature of amyloid pathology in the brain."
        },
        "effect": {
          "type": "Amyloid Pathology",
          "name": "iron-amyloid complex",
          "explanation": "Iron-amyloid complexes form when iron interacts with amyloid-beta plaques, potentially altering their properties and contributing to oxidative stress and neurotoxicity."
        },
        "evidence_phrase": "Studies have shown that Aβ plaques can sequester iron, leading to the formation of iron-amyloid complexes."
      }
    ],
    "biomarkers": [
      {
        "type": "Amyloid Pathology",
        "name": "Aβ plaque",
        "explanation": "A beta-amyloid (Aβ) plaque, a protein fragment that accumulates in the brain, associated with Alzheimer's disease."
      },
      {
        "type": "Metabolism",
        "name": "Iron",
        "explanation": "Iron, an essential mineral, can participate in redox reactions affecting neuronal environments."
      },
      {
        "type": "Cognitive Decline",
        "name": "Cognitive Functions",
        "explanation": "Cognitive functions refer to mental processes like memory and decision-making, often impaired in Alzheimer's disease."
      },
      {
        "type": "Tau Pathology",
        "name": "Phospho-tau",
        "explanation": "Phosphorylated tau, a microtubule-associated protein, is linked to neurodegenerative processes in Alzheimer's."
      },
      {
        "type": "Neuroinflammation",
        "name": "Microglial dysfunction",
        "explanation": "Microglia, the brain's primary immune cells, when dysfunctional, may contribute to Alzheimer's pathology."
      },
      {
        "type": "Metabolism",
        "name": "Glycolysis",
        "explanation": "Glycolysis is a metabolic pathway converting glucose into energy, its alteration is linked to cellular stress and dysfunction."
      }
    ]
  },
  {
    "id": "3_49_72",
    "title": "Paper 3_49_72",
    "refined_relations": [
      {
        "cause": {
          "type": "Metabolism",
          "name": "Selenium",
          "explanation": "Selenium is an essential trace element that is known to be important in the function of various enzymes, including glutathione peroxidases like GPX4."
        },
        "effect": {
          "type": "Gene",
          "name": "GPX4",
          "explanation": "GPX4 (glutathione peroxidase 4) is an enzyme that protects cells from oxidative damage by reducing lipid peroxides, and its activity is dependent on selenium."
        },
        "evidence_phrase": "Selenium is required for the activity of GPX4, as it is a component of the enzyme's active site."
      },
      {
        "cause": {
          "type": "Gene",
          "name": "AP-2 gamma",
          "explanation": "AP-2 gamma, also known as TFAP2C (transcription factor activating enhancer binding protein 2C), is a transcription factor that can influence the expression of other genes."
        },
        "effect": {
          "type": "Gene",
          "name": "GPX4",
          "explanation": "GPX4 is glutathione peroxidase 4, an enzyme that protects cells from oxidative damage by reducing lipid hydroperoxides."
        },
        "evidence_phrase": "Transcription factor AP-2 gamma>>GPX4"
      },
      {
        "cause": {
          "type": "Gene",
          "name": "specificity protein 1 (Sp1)",
          "explanation": "Specificity protein 1 (Sp1) is a transcription factor that regulates the expression of various genes, including those involved in oxidative stress response."
        },
        "effect": {
          "type": "Gene",
          "name": "GPX4",
          "explanation": "GPX4 is a gene that encodes glutathione peroxidase 4, an enzyme involved in protecting cells from oxidative stress."
        },
        "evidence_phrase": "Specificity protein 1 (Sp1) regulates the expression of GPX4, impacting cellular response to oxidative stress."
      }
    ],
    "biomarkers": [
      {
        "type": "Gene",
        "name": "GPX4",
        "explanation": "GPX4 synthesis is essential for protecting neurons and preventing cell death."
      },
      {
        "type": "Gene",
        "name": "AP-2 gamma",
        "explanation": "Transcription factor activated to augment GPX4."
      },
      {
        "type": "Gene",
        "name": "specificity protein 1 (Sp1)",
        "explanation": "Transcription factor activated to augment GPX4."
      },
      {
        "type": "Neurodegeneration",
        "name": "ferroptosis",
        "explanation": "A form of neuron death inhibited by selenium."
      },
      {
        "type": "Neurodegeneration",
        "name": "excitotoxicity-mediated cell death",
        "explanation": "A form of neuron damage counteracted by sodium selenate."
      },
      {
        "type": "Neurodegeneration",
        "name": "ER stress-mediated cell death",
        "explanation": "Another form of neuron damage counteracted by sodium selenate."
      },
      {
        "type": "Drug",
        "name": "selenium",
        "explanation": "A trace element that is essential for GPX4 synthesis and inhibits ferroptosis."
      },
      {
        "type": "Drug",
        "name": "sodium selenate",
        "explanation": "Inorganic compound of selenium that protects neurons in various ways."
      }
    ]
  },
  {
    "id": "2_18_27",
    "title": "Paper 2_18_27",
    "refined_relations": [
      {
        "cause": {
          "type": "Metabolism",
          "name": "AST to ALT ratio",
          "explanation": "The AST to ALT ratio is a metabolic marker often used in the context of liver function but is also considered in various diseases including Alzheimer's, where alterations in liver function may relate to tau pathology."
        },
        "effect": {
          "type": "Tau Pathology",
          "name": "CSF t-tau levels",
          "explanation": "CSF t-tau levels are a biomarker for tau pathology, indicating the presence of neurodegenerative processes common in Alzheimer's disease."
        },
        "evidence_phrase": "Studies have suggested a correlation between metabolic dysfunction, as indicated by liver enzyme ratios like AST to ALT, and increased tau-related pathology observed through elevated CSF t-tau levels."
      },
      {
        "cause": {
          "type": "Amyloid Pathology",
          "name": "CSF amyloid-β 1-42",
          "explanation": "CSF amyloid-β 1-42 is a measure of amyloid-beta peptide levels in the cerebrospinal fluid, often used as a marker for amyloid pathology in Alzheimer's disease."
        },
        "effect": {
          "type": "Metabolism",
          "name": "brain glucose metabolism",
          "explanation": "Brain glucose metabolism refers to how the brain processes and uses glucose, usually assessed by PET scans using fluorodeoxyglucose (FDG), and is an important indicator of brain function and health."
        },
        "evidence_phrase": "Reduced levels of CSF amyloid-β 1-42 are associated with decreased brain glucose metabolism, potentially indicating early neurodegenerative changes."
      },
      {
        "cause": {
          "type": "Tau Pathology",
          "name": "p-tau levels",
          "explanation": "Phosphorylated tau (p-tau) levels are indicative of tau pathology observed in neurodegenerative diseases such as Alzheimer's."
        },
        "effect": {
          "type": "Metabolism",
          "name": "brain glucose metabolism",
          "explanation": "The process by which brain cells utilize glucose, it's often assessed using imaging techniques like FDG-PET in the context of neurodegenerative disorders."
        },
        "evidence_phrase": "Increased p-tau levels are associated with alterations in brain glucose metabolism, reflecting the impact of tau pathology on neuronal function."
      }
    ],
    "biomarkers": [
      {
        "type": "Metabolism",
        "name": "AST to ALT ratio",
        "explanation": "A liver function test ratio where a higher value has been associated with Alzheimer's disease pathology."
      },
      {
        "type": "Tau Pathology",
        "name": "CSF t-tau",
        "explanation": "Total tau protein levels in cerebrospinal fluid, an indicator of tau pathology."
      },
      {
        "type": "Amyloid Pathology",
        "name": "CSF amyloid-β 1-42",
        "explanation": "A form of amyloid-beta in cerebrospinal fluid, lower levels are associated with amyloid plaque formation in Alzheimer's disease."
      },
      {
        "type": "Tau Pathology",
        "name": "p-tau",
        "explanation": "Phosphorylated tau levels in cerebrospinal fluid, indicative of tau pathology in Alzheimer's disease."
      },
      {
        "type": "Metabolism",
        "name": "brain glucose metabolism",
        "explanation": "Glucose metabolism in the brain that may be indicative of brain energy use and synaptic activity, often reduced in Alzheimer's disease."
      }
    ]
  },
  {
    "id": "2_80_37",
    "title": "Paper 2_80_37",
    "refined_relations": [],
    "biomarkers": [
      {
        "type": "Drug",
        "name": "Curcumin",
        "explanation": "A natural compound that shows multi-targeted effects and potential to modify the disease process in Alzheimer's Disease."
      },
      {
        "type": "Drug",
        "name": "AChE inhibitors",
        "explanation": "Current drugs that target a single pathology in Alzheimer's Disease, specifically inhibiting acetylcholinesterase."
      },
      {
        "type": "Drug",
        "name": "NMDA antagonists",
        "explanation": "Current drugs that target NMDA receptors but do not alter the progression of Alzheimer's Disease."
      },
      {
        "type": "Neurodegeneration",
        "name": "Neuron degeneration",
        "explanation": "The process involving the decline and death of neurons, impacting the efficacy of some Alzheimer's treatments."
      }
    ]
  },
  {
    "id": "0_34_21",
    "title": "Paper 0_34_21",
    "refined_relations": [
      {
        "cause": {
          "type": "Metabolism",
          "name": "Cholesterol levels",
          "explanation": "Cholesterol is a type of lipid molecule that is biosynthesized by animal cells and is an essential structural component of animal cell membranes. It is carried through the bloodstream by lipoproteins, and its levels in the blood are a significant factor for health and disease."
        },
        "effect": {
          "type": "Neuroinflammation",
          "name": "inflammatory PET markers",
          "explanation": "Inflammatory PET markers are used in positron emission tomography imaging to detect, visualize, and quantify inflammation in tissues, including in the brain where they can indicate neuroinflammatory processes."
        },
        "evidence_phrase": "Cholesterol levels can influence neuroinflammatory processes, which can be detected using inflammatory PET markers."
      }
    ],
    "biomarkers": [
      {
        "type": "Metabolism",
        "name": "Lipid Metabolism",
        "explanation": "Disturbances in lipid metabolism might contribute to Alzheimer's disease pathogenesis."
      },
      {
        "type": "Metabolism",
        "name": "Cholesterol Levels",
        "explanation": "An increase in cholesterol levels is a risk factor for Alzheimer's disease."
      },
      {
        "type": "Neuroinflammation",
        "name": "Inflammatory Processes",
        "explanation": "Cholesterol levels changes in Alzheimer's disease might be related to inflammatory processes."
      }
    ]
  },
  {
    "id": "2_9_32",
    "title": "Paper 2_9_32",
    "refined_relations": [
      {
        "cause": {
          "type": "Gene",
          "name": "amyloid precursor protein (APP)",
          "explanation": "The amyloid precursor protein (APP) is a membrane protein that, when cleaved by specific enzymes, produces amyloid beta (Aβ) peptides, which are implicated in the development of Alzheimer's disease."
        },
        "effect": {
          "type": "Amyloid Pathology",
          "name": "Aβ1-42",
          "explanation": "Aβ1-42 is a specific form of amyloid beta peptide that is considered more prone to aggregation and is found in amyloid plaques in the brains of Alzheimer's disease patients."
        },
        "evidence_phrase": "APP is processed to form Aβ peptides such as Aβ1-42, contributing to amyloid plaque formation."
      },
      {
        "cause": {
          "type": "Gene",
          "name": "β-secretase 1 (BACE1)",
          "explanation": "BACE1 is an enzyme that cleaves the amyloid precursor protein (APP) to produce amyloid beta (Aβ) peptides."
        },
        "effect": {
          "type": "Amyloid Pathology",
          "name": "Aβ1-42",
          "explanation": "Aβ1-42 is one of the peptides produced by the cleavage of APP by enzymes like BACE1 and is associated with amyloid pathology."
        },
        "evidence_phrase": "BACE1 activity leads to the production of Aβ1-42, a key peptide in the formation of amyloid plaques in Alzheimer's disease."
      },
      {
        "cause": {
          "type": "Amyloid Pathology",
          "name": "Aβ1-42",
          "explanation": "Aβ1-42 is one of the main forms of amyloid-beta peptides that aggregate in the brain and are associated with the development of amyloid plaques, which are implicated in Alzheimer's disease."
        },
        "effect": {
          "type": "Tau Pathology",
          "name": "phosphorylated tau",
          "explanation": "Phosphorylated tau refers to tau proteins that have undergone abnormal phosphorylation, which can lead to the formation of neurofibrillary tangles, another hallmark of Alzheimer's disease."
        },
        "evidence_phrase": "In Alzheimer's disease, the accumulation of Aβ1-42 peptides is thought to lead to tau hyperphosphorylation, potentially causing phosphorylated tau formation."
      },
      {
        "cause": {
          "type": "Tau Pathology",
          "name": "phosphorylated tau",
          "explanation": "Phosphorylated tau is a form of the tau protein that has undergone phosphorylation, which can lead to the formation of neurofibrillary tangles."
        },
        "effect": {
          "type": "Tau Pathology",
          "name": "neurofibrillary tangles",
          "explanation": "Neurofibrillary tangles are aggregates of hyperphosphorylated tau protein found in the brains of individuals with Alzheimer's disease, contributing to neuronal damage."
        },
        "evidence_phrase": "Phosphorylated tau can lead to the formation of neurofibrillary tangles, which are associated with the progression of Alzheimer's disease."
      },
      {
        "cause": {
          "type": "Neurodegeneration",
          "name": "neurofilament light (NFL)",
          "explanation": "NFL, or neurofilament light chain, is a protein that, when found in increased levels, is indicative of neuronal damage and neurodegeneration."
        },
        "effect": {
          "type": "Neurodegeneration",
          "name": "Neurodegeneration",
          "explanation": "Neurodegeneration refers to the progressive loss of structure or function of neurons, including death of neurons, and is a common feature of many neurological diseases."
        },
        "evidence_phrase": "Increased levels of neurofilament light (NFL) in the cerebrospinal fluid or blood are associated with neurodegeneration."
      }
    ],
    "biomarkers": [
      {
        "type": "Amyloid Pathology",
        "name": "Aβ 1-42 :Aβ 1-40 ratio",
        "explanation": "A promising Aβ-related biomarker in blood for Alzheimer's Disease."
      },
      {
        "type": "Gene",
        "name": "BACE1",
        "explanation": "An enzyme whose activity in the blood might predict the progression from mild cognitive impairment to AD dementia by promoting the generation of Aβ peptides."
      },
      {
        "type": "Tau Pathology",
        "name": "Phosphorylated tau protein",
        "explanation": "A major component of intraneuronal neurofibrillary tangles found in AD, with abnormal phosphorylation thought to be driven by Aβ peptides."
      },
      {
        "type": "Tau Pathology",
        "name": "Tau levels in blood",
        "explanation": "May be useful as a predictor of future cognitive decline."
      },
      {
        "type": "Neurodegeneration",
        "name": "Neurofilament light (NFL)",
        "explanation": "An axonal protein elevated in blood after neuronal injury; useful as a biomarker of neurodegeneration."
      }
    ]
  },
  {
    "id": "0_38_5",
    "title": "Paper 0_38_5",
    "refined_relations": [],
    "biomarkers": []
  }
];