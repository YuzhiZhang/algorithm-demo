import { bubbleSort, bubbleSort2Way } from './BubbleSort';

test('bubble sort', () => {
  expect(bubbleSort([2, 4, 1, 6, 9, 8])).toEqual([1, 2, 4, 6, 8, 9]);
});

test('bubble sort 2 way', () => {
  expect(bubbleSort2Way([2, 4, 1, 6, 9, 8])).toEqual([1, 2, 4, 6, 8, 9]);
});
