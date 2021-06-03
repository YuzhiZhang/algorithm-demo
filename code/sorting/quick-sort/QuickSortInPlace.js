/**
 * Quicksort is a divide and conquer algorithm. Quicksort first divides a large
 * array into two smaller sub-arrays: the low elements and the high elements.
 * Quicksort can then recursively sort the sub-arrays
 * 1.Pick an element, called a pivot, from the array.
 * 2.Partitioning: reorder the array so that all elements with values less than
 *   the pivot come before the pivot, while all elements with values greater than
 *   the pivot come after it (equal values can go either way). After this partitioning,
 *   the pivot is in its final position. This is called the partition operation.
 * 3.Recursively apply the above steps to the sub-array of elements with smaller
 *   values and separately to the sub-array of elements with greater values.
 * @param D
 */
export default (D) => {
  function partition(D, low, high) {
    let left;
    let right;
    let pivot;
    while (high > low) {
      left = low;
      right = high;
      pivot = D[low];
      while (left < right) {
        while (D[right] > pivot) {
          right--;
        }
        D[left] = D[right];

        while (pivot >= D[left] && left < right) {
          left++;
        }
        D[right] = D[left];
      }
      D[left] = pivot;

      // }
      partition(D, low, left - 1);
      low = left + 1;
    }
  }

  function quicksort(D) {
    partition(D, 0, D.length - 1);
  }

  quicksort(D);

  return D;
};
