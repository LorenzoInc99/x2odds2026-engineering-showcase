/**
 * Sanitized excerpt: LLM extraction with JSON-schema constraints.
 * Demonstrates predictable parsing for downstream automation.
 */

const FIXTURE_INTENT_SCHEMA = {
  type: 'object',
  properties: {
    team_a: { type: 'string' },
    team_b: { type: 'string' },
    is_two_team_matchup: { type: 'boolean' },
    is_single_team_club_query: { type: 'boolean' },
  },
  required: ['team_a', 'team_b', 'is_two_team_matchup', 'is_single_team_club_query'],
  additionalProperties: false,
} as const

type ExtractedFixtureIntent =
  | { mode: 'two'; team_a: string; team_b: string }
  | { mode: 'single'; team: string }

export function parseIntentFromModelOutput(raw: string): ExtractedFixtureIntent | null {
  let parsed: {
    team_a?: string
    team_b?: string
    is_two_team_matchup?: boolean
    is_single_team_club_query?: boolean
  }
  try {
    parsed = JSON.parse(raw)
  } catch {
    return null
  }

  const a = (parsed.team_a ?? '').trim()
  const b = (parsed.team_b ?? '').trim()
  const two = !!parsed.is_two_team_matchup
  const single = !!parsed.is_single_team_club_query

  if (two && !single && a.length >= 2 && b.length >= 2 && a.toLowerCase() !== b.toLowerCase()) {
    return { mode: 'two', team_a: a, team_b: b }
  }
  if (single && !two && a.length >= 2 && b.length === 0) {
    return { mode: 'single', team: a }
  }
  return null
}
