# X2ODDS2026 Engineering Showcase

Public, **documentation-first** portfolio for hiring review: **Sport API → PostgreSQL (Supabase) → LLM orchestration → Next.js UI**.

**What this is:** architecture, patterns, and engineering judgment.  
**What this is not:** a runnable clone, `.env`, secrets, full prompts, partners, or proprietary business logic.

---

## Start here (2-minute path)

| Read first | What you get |
|------------|----------------|
| **[`docs/INDEX.md`](docs/INDEX.md)** | Full table of contents + links to every doc |
| **[`docs/00-overview.md`](docs/00-overview.md)** | Pipeline diagram + request flow |
| **[`docs/05-transferable-skills.md`](docs/05-transferable-skills.md)** | Skill map for analytics / applied AI roles |
| **[`docs/03-ai-layer.md`](docs/03-ai-layer.md)** | DB-grounded LLM orchestration |
| **`samples/`** | Sanitized TypeScript/SQL patterns |

---

## What this demonstrates

- **Data ingestion:** REST Sport API → sync jobs → normalized PostgreSQL
- **Data engineering:** SQL migrations, operational tables, analytical shape
- **AI / analytics engineering:** structured context, constraints, server-side orchestration
- **Product engineering:** ~77 Next.js API route handlers, React UI on the same stack
- **Reliability mindset:** cadence, validation checks, operational state (high level only)

## Stack (transferable)

TypeScript · Next.js (App Router) · React · PostgreSQL / Supabase · REST · LLM API (`@google/genai`) · migration-led schema evolution

## Scope (non-sensitive, order of magnitude)

- **~77** HTTP API route handlers in the main application branch  
- **~20** SQL migration files in the current branch context  
- Local-first development; deployment planned separately  

## Repository layout

```
README.md          ← you are here
docs/              ← deep-dive: INDEX + pipeline, DB, AI, UI, skills map, security, case study
samples/           ← sanitized code patterns only
```

See **[`docs/INDEX.md`](docs/INDEX.md)** for the full list.

## Author

Solo engineering ownership: backend/API, data layer, AI integration, and UI wiring (as described in this repo).

## Use

For professional review (recruiting, interviews). `samples/` are illustrative patterns, not drop-in production code.
