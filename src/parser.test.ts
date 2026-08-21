import { countTokens } from './parser';

describe('countTokens', () => {
  it('should count all tokens in an array', () => {
    expect(countTokens(['a', 'b', 'c'])).toBe(3);
  });

  it('should return 0 for an empty array', () => {
    expect(countTokens([])).toBe(0);
  });

  it('should count a single token', () => {
    expect(countTokens(['token'])).toBe(1);
  });

  it('should count two tokens', () => {
    expect(countTokens(['first', 'second'])).toBe(2);
  });

  it('should count many tokens', () => {
    const tokens = Array(100).fill('token');
    expect(countTokens(tokens)).toBe(100);
  });
});
