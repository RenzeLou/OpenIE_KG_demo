#!/usr/bin/env python3
"""
Replace paper ids/titles in my-graph-demo/src/data.js with paper names from paper_name_2021.json.

Behavior:
- Read paper names from `paper_name_2021.json` (expects a JSON array of strings).
- Read the JS file `my-graph-demo/src/data.js`, extract the exported PAPERS array (JSON-like),
  parse it, and for each paper entry replace `id` and `title` with the next name from the
  paper names list. Replacement is done sequentially (one-by-one). If there are fewer
  names than papers, remaining papers are left unchanged.
- Write a new `data.js` in the repository root (next to this script) containing the
  updated `export const PAPERS = ...;` so it can be imported by the demos.

Usage:
  python replace_paper_id.py
  python replace_paper_id.py --src my-graph-demo/src/data.js --names paper_name_2021.json --out data.js

"""
from __future__ import annotations

import argparse
import json
import re
from pathlib import Path
from typing import List


def load_names(path: Path) -> List[str]:
    data = json.loads(path.read_text(encoding="utf-8"))
    if not isinstance(data, list):
        raise ValueError(f"Expected a JSON array of names in {path}")
    return [str(x) for x in data]


def normalize_name(name: str) -> str:
    """Strip any leading numeric index like '1. ' or '10. ' from a name string."""
    return re.sub(r"^\s*\d+\.\s*", "", name)


def extract_papers_array(js_text: str) -> str:
    """Find the array literal assigned to `export const PAPERS =` and return it as text.

    Assumes the file contains a single top-level `export const PAPERS = [ ... ];` block.
    """
    m = re.search(r"export\s+const\s+PAPERS\s*=\s*(\[)", js_text)
    if not m:
        raise ValueError("Could not find `export const PAPERS = [` in JS file")
    start = m.start(1)

    # Find the matching closing bracket for the array. We'll walk the text from the
    # first '[' and track bracket depth. This is robust for nested objects/arrays.
    depth = 0
    i = start
    L = len(js_text)
    while i < L:
        ch = js_text[i]
        if ch == '[':
            depth += 1
        elif ch == ']':
            depth -= 1
            if depth == 0:
                # include closing bracket
                return js_text[start:i + 1]
        i += 1
    raise ValueError("Unbalanced brackets when extracting PAPERS array")


def parse_papers(array_text: str):
    """Convert the JS array text into Python list using json.loads.

    The JS array in the file is JSON-compatible, so json.loads should work.
    """
    try:
        return json.loads(array_text)
    except Exception as e:
        # Provide a helpful error for debugging
        raise ValueError(f"Failed to parse PAPERS array as JSON: {e}")


def replace_ids(papers: List[dict], names: List[str]) -> int:
    """Replace paper id and title sequentially from names list.

    Returns number of replacements performed.
    """
    replaced = 0
    for idx, paper in enumerate(papers):
        if idx < len(names):
            raw_name = names[idx]
            name = normalize_name(raw_name)
            number = idx + 1
            # Only update the `title` field to the requested format; leave `id` intact
            paper['title'] = f"paper {number}: {name}"
            replaced += 1
        else:
            # leave as-is when there are no more names
            continue
    return replaced


def build_output_js(papers: List[dict]) -> str:
    body = json.dumps(papers, indent=2, ensure_ascii=False)
    return f"export const PAPERS = {body};\n"


def main() -> None:
    p = argparse.ArgumentParser()
    p.add_argument("--src", default="my-graph-demo/src/data.js", help="source data.js path")
    p.add_argument("--names", default="paper_name_2021.json", help="JSON file with paper names")
    p.add_argument("--out", default="data.js", help="output data.js path (written to repo root)")
    args = p.parse_args()

    src_path = Path(args.src)
    names_path = Path(args.names)
    out_path = Path(args.out)

    if not src_path.exists():
        raise FileNotFoundError(f"Source JS file not found: {src_path}")
    if not names_path.exists():
        raise FileNotFoundError(f"Names JSON file not found: {names_path}")

    js_text = src_path.read_text(encoding="utf-8")
    array_text = extract_papers_array(js_text)
    papers = parse_papers(array_text)

    names = load_names(names_path)
    replaced = replace_ids(papers, names)

    out_js = build_output_js(papers)
    out_path.write_text(out_js, encoding="utf-8")

    print(f"Wrote {out_path} ({replaced} entries replaced).")


if __name__ == "__main__":
    main()
