# Map of the full private repository (folder-level)

This describes **where** work lives in the real Next.js project, without listing secrets, env files, or proprietary logic. It helps reviewers understand **scope** and **ownership**.

## Top-level layout (typical monolith)

| Folder / file | Role |
|----------------|------|
| `app/` | Next.js App Router: **pages**, **layouts**, and **`app/api/**` route handlers** (HTTP API surface). |
| `components/` | React UI: shells, panels, chat UI, shared widgets. |
| `lib/` | Domain logic: chat orchestration, data access helpers, integration clients, board logic, etc. |
| `migrations/` | SQL migrations for PostgreSQL/Supabase schema evolution. |
| `scripts/` | CLI tools: sync, verification, audits, one-off maintenance. |
| `public/` | Static assets served by Next.js. |
| `docs/` | Internal product and integration notes (not all copied to this showcase). |
| `middleware.ts` | Edge/server middleware for routing and auth-related behavior. |
| `package.json` | Dependencies and npm scripts. |

## What is not copied into this public showcase

- `.env*` and any secret material  
- Full `app/` and `lib/` trees  
- Vendor-specific prompt files and business rules  
- User or partner data  

This public repo is a **curated narrative** plus **sanitized samples** under `samples/`.
