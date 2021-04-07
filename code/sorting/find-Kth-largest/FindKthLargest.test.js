import findKthLargest from './FindKthLargest';

test('find kth largest', () => {
  expect(findKthLargest([3, 2, 1, 5, 6, 4], 2)).toBe(5);
  expect(findKthLargest([3, 2, 7, 5, 6, 4, 1], 4)).toBe(4);
});
