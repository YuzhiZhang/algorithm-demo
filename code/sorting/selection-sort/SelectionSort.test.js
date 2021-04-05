import { selectionSort } from './SelectionSort';

test('selection sort', () => {
  expect(selectionSort([2, 4, 1, 6, 9, 8])).toEqual([1, 2, 4, 6, 8, 9]);
});
