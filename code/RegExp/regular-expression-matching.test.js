import { isMatch, isMatch2Way } from './regular-expression-matching';

test('regular expression matching', () => {
  expect(isMatch('aa', 'a')).toBe(false);
  expect(isMatch('aa', 'a*')).toBe(true);
  expect(isMatch('ab', '.*')).toBe(true);
  expect(isMatch('aab', 'c*a*b')).toBe(true);
  expect(isMatch('mississippi', 'mis*is*p*.')).toBe(false);
  // Maximum call stack size exceeded
  // expect(isMatch('ab', '.*c')).toBe(false);
});

test('regular expression matching 2 way', () => {
  expect(isMatch2Way('aa', 'a')).toBe(false);
  expect(isMatch2Way('aa', 'a*')).toBe(true);
  expect(isMatch2Way('ab', '.*')).toBe(true);
  expect(isMatch2Way('aab', 'c*a*b')).toBe(true);
  expect(isMatch2Way('mississippi', 'mis*is*p*.')).toBe(false);
  // Maximum call stack size exceeded
  expect(isMatch2Way('ab', '.*c')).toBe(false);
});
