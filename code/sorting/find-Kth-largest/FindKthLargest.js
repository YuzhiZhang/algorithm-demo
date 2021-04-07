/**
 * see: https://leetcode-cn.com/problems/kth-largest-element-in-an-array/
 * @param nums
 * @param k
 */
export default function findKthLargest(nums, k) {
  /*nums.sort((a, b) => b - a);
  return nums[k - 1];*/
  const len = nums.length;
  for (let i = 0; i < k; i++) {
    for (let j = 0, temp; j < len - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
    }
  }

  return nums[len - k];
}
