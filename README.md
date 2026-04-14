# X2ODDS2026 Engineering Showcase

Public, documentation-first showcase of an analytics/AI engineering project.

This repository is intentionally curated for hiring review:
- No secrets
- No partner details
- No full prompts
- No proprietary formulas or business logic

It shows engineering capability across the full chain:

**Sport API -> Database -> AI layer -> User interface**

## What this demonstrates

- API ingestion and synchronization patterns from an external Sport API
- SQL-first data modeling and schema evolution in PostgreSQL/Supabase
- LLM orchestration with structured context and constraints
- End-to-end route-driven application flow in Next.js
- Reliability thinking: sync cadence, validation checks, and operational state

## Stack used

- TypeScript, Next.js (App Router), React
- PostgreSQL / Supabase
- REST APIs
- LLM API integration (`@google/genai`)
- SQL migrations and script-based verification

## Scope indicators (high level)

- ~77 API route handlers in the main project branch
- ~20 SQL migration files in the current branch context
- Local-first development workflow with planned hosted deployment

## Repository map

- `docs/00-overview.md` - end-to-end architecture
- `docs/01-sport-api-and-sync.md` - ingestion and sync lifecycle
- `docs/02-database.md` - data model and migration approach
- `docs/03-ai-layer.md` - LLM orchestration and grounding strategy
- `docs/04-frontend.md` - user-facing layer and API integration
- `docs/security-boundary.md` - what is excluded and why
- `docs/case-study.md` - engineering lessons learned
- `samples/` - sanitized implementation patterns

## Important note

This is not a full runnable copy of the production/private repository. It is a technical showcase designed to communicate architecture, implementation patterns, and engineering judgment without exposing sensitive assets.
# X2ODDS2026 — Engineering Showcase

**What this is:** A **documentation-first** portfolio of a production-style analytics/AI product: external **Sport API** → **PostgreSQL (Supabase)** → **LLM-assisted workflows** → **Next.js UI**.  
**What this is not:** A runnable clone of the full application. There is no `.env`, no secrets, no partner data, and no proprietary ranking or commercial logic—so reviewers can **read** architecture and patterns, not fork a working business stack.

---

## At a glance

| Layer | Role | Stack (high level) |
|--------|------|---------------------|
| **Ingestion** | Scheduled and on-demand sync from a Sport API into your own database | TypeScript, REST, batch upserts, operational logging |
| **Database** | Analytical + operational tables; schema evolved via SQL migrations | PostgreSQL (Supabase), migrations, service-role writes for pipelines |
| **AI** | Answers grounded in **DB-backed context** (not “prompt + raw API only”); structured extraction, constrained outputs, multi-step flows | LLM APIs, JSON/schema constraints, server-side orchestration |
| **UI** | Consumer-facing app on top of the same APIs | Next.js (App Router), React |

**Scale (order of magnitude, non-sensitive):** on the order of **70+** HTTP route handlers; **~20** SQL migration files in the branch used for this showcase; sync jobs that upsert large fixture/odds/stat volumes during development runs.

---

## How to read this repo

1. **[`docs/00-overview.md`](docs/00-overview.md)** — End-to-end pipeline diagram and data flow.  
2. **[`docs/01-sport-api-and-sync.md`](docs/01-sport-api-and-sync.md)** — Sport API → database: sync strategy, reliability, no vendor lock-in in the narrative.  
3. **[`docs/02-database.md`](docs/02-database.md)** — Modeling approach, migrations, what stays out of public docs.  
4. **[`docs/03-ai-layer.md`](docs/03-ai-layer.md)** — DB-first context, LLM roles, evaluation mindset (no full prompts).  
5. **[`docs/04-frontend.md`](docs/04-frontend.md)** — How the UI consumes the same stack.  
6. **[`docs/case-study.md`](docs/case-study.md)** — Lessons from building and iterating locally.  
7. **`samples/`** — Sanitized code **patterns** only (not copy-paste runnable without your environment).

---

## Why “documentation-first”?

- **Security:** No credentials, no RLS policy text, no internal URLs.  
- **IP:** No full prompts, formulas, or partner-specific material.  
- **Clarity:** Hiring teams get a **dense** story in minutes; deeper dives happen in interviews if needed.

---

## Author

Solo ownership of the engineering work described in this repository (architecture, backend/API, data layer, AI integration, and UI wiring).

---

## License / use

Content is for **professional review** (recruiting, interviews). Do not treat `samples/` as production code without adaptation and your own security review.
