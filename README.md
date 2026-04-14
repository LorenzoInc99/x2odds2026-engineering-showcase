# X2ODDS2026 Engineering Showcase

End-to-end process (what this project implements at a high level):

```
                    ┌─────────────┐
                    │    User     │
                    └──────┬──────┘
                           │ questions, clicks
                           ▼
┌──────────┐    ┌──────────────────┐    ┌─────────────┐    ┌──────────┐
│ Sport    │◀──▶│   Database       │◀──▶│     AI      │◀──▶│   User   │
│ API      │    │ (PostgreSQL /    │    │ (LLM +      │    │ Interface│
│ (REST)   │    │  Supabase)       │    │  orchestr.) │    │ (Next.js)│
└──────────┘    └──────────────────┘    └─────────────┘    └────┬─────┘
      │                   │                    │                 │
      │ sync / refresh    │ read / write       │ context in      │ HTML/JSON
      │                   │ context            │ generation      │ responses
      └───────────────────┴────────────────────┴─────────────────┘
```

**How to read it**

- **Sport API ↔ Database:** scheduled and on-demand jobs pull **external sports data** and **upsert** into your tables (fixtures, odds, stats context, etc.). The DB is the **internal source of truth** for the app.
- **Database ↔ AI:** before answering, the backend **loads structured rows** from the DB and builds **context blocks** for the model. The LLM is **not** asked to invent facts that exist in your data.
- **AI ↔ User Interface:** the UI calls **your** API routes; those routes run the orchestration (intent → DB → LLM → response). **Secrets and providers stay on the server.**
- **User Interface ↔ User:** the user sees pages, chat, and controls; they interact with **React** and the same **HTTP API** surface.

**What this repo contains:** documentation and sanitized samples only — not the full runnable app, `.env`, or proprietary prompts.

---

## Quick links

| Doc | Content |
|-----|---------|
| **[`docs/00-overview.md`](docs/00-overview.md)** | **Full process diagram** (including User) + request sequence |
| [`docs/INDEX.md`](docs/INDEX.md) | Table of contents for all docs |
| [`docs/03-ai-layer.md`](docs/03-ai-layer.md) | LLM + database grounding |
| [`samples/`](samples/) | Sanitized code patterns |

---

## What this demonstrates

- **Ingestion:** Sport API → sync → PostgreSQL
- **Data engineering:** migrations, operational tables
- **AI engineering:** DB-grounded orchestration, constraints
- **Product:** Next.js API routes + React UI (~77 route handlers in the main project branch)

## Stack

TypeScript · Next.js · React · PostgreSQL/Supabase · REST · LLM API (`@google/genai`)

## Scope (order of magnitude)

~77 API route handlers · ~20 SQL migration files · local-first

## Author

Solo engineering ownership of backend/API, data layer, AI integration, and UI wiring.

## Use

Professional review (recruiting, interviews). `samples/` are illustrative, not production drop-ins.
