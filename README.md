# X2ODDS2026 Engineering Showcase

## End-to-end process (as built)

Single chain — **left = external data**, **right = human**:

```
┌─────────────┐   ┌─────────────┐   ┌─────────────┐   ┌──────────────────┐   ┌─────────────┐
│  Sport API  │◀─▶│  Database   │◀─▶│     AI      │◀─▶│  User Interface  │◀─▶│    User     │
│   (REST)    │   │ PostgreSQL  │   │ LLM + server│   │ Next.js + React│   │  (human)    │
│             │   │ / Supabase  │   │ orchestration│  │ pages, chat UI │   │             │
└─────────────┘   └─────────────┘   └─────────────┘   └──────────────────┘   └─────────────┘
```

**How each link works (short)**

| Link | What happens |
|------|----------------|
| **Sport API ↔ Database** | Sync jobs fetch sports data and **upsert** into your tables. The DB is your **internal source of truth** for fixtures/odds/stats used in the app. |
| **Database ↔ AI** | Route handlers **query** Postgres, build **structured context**, then call the LLM. Facts in the DB are preferred over model “memory” for domain data. |
| **AI ↔ User Interface** | The browser talks only to **your** Next.js API routes. **No** API keys or full prompts in the client — orchestration stays server-side. |
| **User Interface ↔ User** | User asks / clicks; UI shows responses, boards, chat, etc. |

**Two real traffic paths (same boxes, different direction):**

1. **Background (keep DB fresh):** Sport API → sync → **Database** (repeats on a schedule or when triggered).  
2. **Foreground (answer a user):** **User** → UI → API → read **Database** + call **AI** → response back to UI → **User**.

This repo is **documentation + sanitized samples only** — not the full private app, not `.env`, not secrets, not full prompts.

---

## Read next

| Doc | Purpose |
|-----|---------|
| [`docs/06-end-to-end-process.md`](docs/06-end-to-end-process.md) | Same chain, diagrams, and the two paths (sync vs interactive) |
| [`docs/00-overview.md`](docs/00-overview.md) | Mermaid sequence: User → UI → API → DB → LLM |
| [`docs/INDEX.md`](docs/INDEX.md) | Full table of contents |
| [`docs/tech-stack.md`](docs/tech-stack.md) | Dependencies and tooling (from `package.json`, no secrets) |
| [`docs/07-private-repo-map.md`](docs/07-private-repo-map.md) | What exists in the full project **at folder level** (still no env) |
| [`samples/README.md`](samples/README.md) | What each sample file illustrates |

---

## Numbers (order of magnitude, non-sensitive)

- **~77** Next.js API route handlers in the main application branch  
- **~20** SQL migration files  
- Local development; deployment is separate from this showcase  

## Stack (summary)

TypeScript · Next.js 14 · React · PostgreSQL/Supabase · REST · `@google/genai` · Tailwind · ESLint  

## Author

Solo engineering ownership: API, data layer, AI integration, UI wiring.

## Use

For hiring / interviews. `samples/` are patterns only, not runnable production code.
