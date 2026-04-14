# Samples

Sanitized **patterns** only. They are **not** a minimal runnable app: no `.env`, no real API keys, no connection to your Supabase project.

| File | Demonstrates |
|------|----------------|
| `sync-endpoint-snippet.ts` | Protected POST handler: auth gate + placeholder sync steps (Sport API → DB narrative). |
| `llm-context-pattern.ts` | Building a **grounded** prompt from structured DB-shaped context before an LLM call. |
| `sql-migration-snippet.sql` | Small migration for **operational state** (e.g. last sync metadata). |

## How to use in an interview

Point reviewers to these files as **examples of how you think** about boundaries (auth, SQL, LLM grounding), not as production code to deploy.
