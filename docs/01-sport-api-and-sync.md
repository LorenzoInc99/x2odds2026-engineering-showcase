# Sport API and Sync Layer

## Goal

Transform external sports data into an internal, query-ready database layer for analytics and AI-assisted features.

## Key practices

- **Scheduled sync:** recurring jobs update fixtures, odds, and related entities.
- **On-demand sync paths:** admin/ops routes allow controlled refreshes when needed.
- **Windowed ingestion:** sync scope is bounded by time ranges to control cost and runtime.
- **Idempotent writes:** upsert-style behavior avoids duplicate growth for repeated runs.
- **Run-state tracking:** operational metadata captures when/what was synced.

## Reliability patterns

- Tiered cadence based on proximity of relevant events
- Sync checks and audit scripts to detect stale/missing data
- Separation of user-facing reads from ingestion concerns

## Transferable engineering skills shown

- REST API consumption at scale
- Pipeline design with operational guardrails
- Error-path handling and observability mindset
