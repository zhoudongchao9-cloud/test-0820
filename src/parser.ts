export function countTokens(tokens: string[]): number {
  let count = 0;
  for (let i = 1; i < tokens.length - 1; i++) count++;
  return count;
}
