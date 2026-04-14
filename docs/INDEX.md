# Documentation index

Read in order for a full walkthrough, or jump to a topic.

| Doc | Topic |
|-----|--------|
| [`00-overview.md`](00-overview.md) | End-to-end system flow: API → DB → AI → UI |
| [`01-sport-api-and-sync.md`](01-sport-api-and-sync.md) | Ingestion, sync windows, reliability patterns |
| [`02-database.md`](02-database.md) | PostgreSQL/Supabase modeling, migrations, boundaries |
| [`03-ai-layer.md`](03-ai-layer.md) | LLM orchestration, DB grounding, constraints |
| [`04-frontend.md`](04-frontend.md) | Next.js surface, API integration |
| [`05-transferable-skills.md`](05-transferable-skills.md) | Skill map for analytics / AI engineering roles |
| [`case-study.md`](case-study.md) | Lessons: reliability as a systems problem |
| [`security-boundary.md`](security-boundary.md) | What is intentionally excluded from this repo |
| [`publish-checklist.md`](publish-checklist.md) | Pre-publish safety checklist |

## Samples (`../samples/`)

| File | Illustrates |
|------|-------------|
| `sync-endpoint-snippet.ts` | Protected sync route pattern (API → DB path) |
| `llm-context-pattern.ts` | DB-grounded prompt assembly (sanitized) |
| `sql-migration-snippet.sql` | Operational state table migration pattern |
