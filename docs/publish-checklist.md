# Publish Checklist (Before Making Repo Public)

## 1) Secrets and sensitive text
- Search for: `API_KEY`, `SECRET`, `TOKEN`, `PASSWORD`, `SUPABASE_SERVICE_ROLE_KEY`
- Verify no `.env` files are present
- Ensure URLs do not contain embedded credentials

## 2) Data privacy
- Remove any customer/user identifiers
- Remove private partner names if under NDA
- Keep screenshots free of sensitive values

## 3) IP protection
- Exclude proprietary scoring/ranking formulas
- Exclude monetization logic and strategy docs
- Keep only representative snippets

## 4) Repository hygiene
- Add `README.md` with clear scope and disclaimer
- Add `LICENSE` (optional but recommended)
- Ensure all example code compiles conceptually even if not executable standalone

## 5) Application usage
- Link this showcase in CV as: "Technical Showcase (sanitized)"
- Add one line: "Production repository remains private due to commercial IP and security constraints."
