import { findSubstring, findSubstring2Way } from './find-substring';

test('find substring', () => {
  expect(findSubstring('barfoothefoobarman', ['foo', 'bar'])).toEqual([0, 9]);
  expect(
    findSubstring('wordgoodgoodgoodbestword', ['word', 'good', 'best', 'word'])
  ).toEqual([]);
  expect(
    findSubstring('barfoofoobarthefoobarman', ['bar', 'foo', 'the'])
  ).toEqual([6, 9, 12]);
});

test('find substring 2 way', () => {
  expect(findSubstring2Way('barfoothefoobarman', ['foo', 'bar'])).toEqual([
    0,
    9,
  ]);
  expect(
    findSubstring2Way('wordgoodgoodgoodbestword', [
      'word',
      'good',
      'best',
      'word',
    ])
  ).toEqual([]);
  expect(
    findSubstring2Way('barfoofoobarthefoobarman', ['bar', 'foo', 'the'])
  ).toEqual([6, 9, 12]);
});
