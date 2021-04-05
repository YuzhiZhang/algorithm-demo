import quickSortInPlace from './QuickSortInPlace.js';

test('quick sort in place: ', () => {
  expect(
    quickSortInPlace([3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48])
  ).toEqual([2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]);
});
