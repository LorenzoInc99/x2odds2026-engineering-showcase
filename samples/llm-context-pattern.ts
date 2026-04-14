/**
 * Sanitized pattern: LLM call with DB-grounded context.
 */
type MatchContext = {
  fixtureLabel: string
  keyStats: string[]
  recentForm: string
}

function buildPrompt(userQuestion: string, ctx: MatchContext): string {
  return [
    'You are an assistant for sports analysis.',
    'Use only the provided context for factual claims.',
    `Fixture: ${ctx.fixtureLabel}`,
    `Recent form: ${ctx.recentForm}`,
    `Key stats: ${ctx.keyStats.join(', ')}`,
    `Question: ${userQuestion}`,
  ].join('\n')
}

export async function answerWithGroundedContext(
  userQuestion: string,
  ctx: MatchContext
): Promise<string> {
  const prompt = buildPrompt(userQuestion, ctx)
  // call LLM provider with constrained settings and parse response
  void prompt
  return 'Sanitized example response'
}
