# AI Layer: LLM Orchestration and Grounding

## Objective

Generate useful, context-aware answers by combining:
- user question understanding
- structured data retrieval from internal database
- constrained model generation

## How it works (high level)

1. User query arrives via API route.
2. Intent extraction/disambiguation identifies relevant entities.
3. Database context is assembled from internal records.
4. LLM is called with:
   - role instructions
   - structured context
   - output expectations/rules
5. Response is post-processed and returned to the UI.

## Why this is not just "prompt + model"

- Database grounding reduces hallucination risk for factual domains.
- Structured context gives stronger control over answer quality.
- Multi-step orchestration lets the app handle ambiguity more robustly.

## Current maturity

- Active iterative improvement in local development
- Focus on consistency and practical reliability
- Evaluation hardening is an explicit ongoing direction

## Boundaries

- No full production prompts in this repo
- No proprietary scoring formulas
- No commercial or partner logic details
