# FAQ

## Is this the full application?

No. This repository is a **showcase**: documentation and small sanitized code patterns. The runnable app, database credentials, and proprietary logic remain in a **private** repository.

## Why not open-source everything?

To protect commercial logic, partner relationships, prompts, and user data while still demonstrating engineering ability.

## How do you connect the Sport API to the database?

Through **server-side** sync jobs and authenticated route handlers that fetch from the REST API and **upsert** into PostgreSQL tables. Details differ by endpoint; the pattern is **batch/windowed** ingestion rather than per-user calls for bulk data.

## How does the AI use the database?

Before generation, handlers **query** relevant tables and assemble **structured context**. The model is instructed to treat that context as authoritative for factual domain content when present.

## Does the user talk to the LLM directly?

No. The **browser** calls **your** Next.js API. Those routes orchestrate DB access and LLM calls. Keys stay on the server.

## What should I look at first?

1. [`06-end-to-end-process.md`](06-end-to-end-process.md) — five-part chain and two paths  
2. [`00-overview.md`](00-overview.md) — sequence diagram  
3. [`samples/README.md`](../samples/README.md) — code patterns  
