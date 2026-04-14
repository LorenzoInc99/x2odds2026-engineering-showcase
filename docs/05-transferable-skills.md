# Transferable skills (Analytics / AI engineering)

This page maps the project to skills commonly expected in analytics engineering and applied AI roles.

## Data foundations

- Relational modeling for analytical and operational use cases
- Migration-driven schema evolution (repeatable DDL)
- SQL as the integration layer between ingestion and application features

## Pipelines and integration

- REST API consumption with bounded sync windows
- Idempotent upsert thinking for repeated jobs
- Separation of batch ingestion from online user requests

## AI system design

- Orchestration: intent → retrieval → generation → post-processing
- Grounding structured domain data from internal stores before LLM calls
- Output constraints (schema-shaped steps where applicable), not only free text
- Iterative improvement of data quality and model behavior together

## Software engineering

- TypeScript end-to-end in a single codebase
- Next.js route handlers as the service boundary for UI and automation
- Operational hooks for debugging and controlled refresh (described at high level)

## What is not claimed here

- Fine-tuning or training custom foundation models
- Full public evaluation benchmarks or proprietary metrics
- Vendor-specific certification (frameworks are named at stack level only)
