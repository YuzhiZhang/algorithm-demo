/**
 * see: https://leetcode-cn.com/problems/sort-array-by-parity-ii/
 * 奇偶排序
 * @param nums 未排序整数数组
 */
export function sortArrayByParityII(nums) {
  nums.sort((a, b) => a - b);
  let arr = [];
  let even = 0;
  let odd = 1;
  nums.forEach((item) => {
    if (item % 2 === 1) {
      arr[odd] = item;
      odd += 2;
    } else {
      arr[even] = item;
      even += 2;
    }
  });
  return arr;
}
