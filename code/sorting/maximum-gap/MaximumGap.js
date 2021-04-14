/**
 * see: https://leetcode-cn.com/problems/maximum-gap/
 * @param arr
 */
export function maximumGap(arr) {
  if (arr.length < 2) return 0;
  arr.sort((a, b) => a - b);
  let max = 0;
  const len = arr.length;
  for (let i = 0, temp; i < len - 1; i++) {
    temp = arr[i + 1] - arr[i];
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

export function maximumGap2Way(arr) {
  if (arr.length < 2) return 0;
  let max = 0;
  const len = arr.length;
  let space;
  for (let i = len - 1, temp; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }

    if (i < len - 1) {
      space = arr[i + 1] - arr[i];
      if (space > max) {
        max = space;
      }
    }
  }

  return Math.max(max, arr[1] - arr[0]);
}
