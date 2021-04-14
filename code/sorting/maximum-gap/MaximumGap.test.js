import { maximumGap, maximumGap2Way } from './MaximumGap';

test('find maximum gap', () => {
  expect(maximumGap([3, 6, 9, 1])).toBe(3);
});

test('find maximum gap 2 way', () => {
  expect(maximumGap2Way([3, 6, 9, 1])).toBe(3);
  expect(maximumGap2Way([13, 16, 19, 1])).toBe(12);
});
