// see: https://leetcode-cn.com/problems/first-missing-positive/
export function firstMissingPositive(arr) {
  // filter 过滤正整数
  const arrPositive = arr.filter((item) => item > 0);
  // 判断正整数的数组是否为空
  if (arrPositive.length <= 0) {
    return 1;
  }
  // 生序， 目的：方便从左到右找出最小值arr[0]
  arrPositive.sort((a, b) => a - b);
  // 如果第一个元素为1
  if (arrPositive[0] !== 1) {
    return 1;
  }

  // 从左到右开始遍历，下一个元素的值减去当前元素的值的差值大于1，则说明当前元素+1为缺失的数
  for (let i = 0; i < arrPositive.length - 1; i++) {
    if (arrPositive[i + 1] - arrPositive[i] > 1) {
      return arrPositive[i] + 1;
    }
  }

  // 如果数组是连续的正整数，则最后一个元素+1 ;
  // [1,2,3,4,5,6,7]
  return arrPositive.pop() + 1;
}

export function firstMissingPositive2Way(arr) {
  const arrPositive = arr.filter((item) => item > 0);
  if (arrPositive.length <= 0) {
    return 1;
  }
  let min;
  for (let i = 0; i < arrPositive.length - 1; i++) {
    min = i;
    for (let j = i; j < arrPositive.length; j++) {
      if (arrPositive[j] < arrPositive[min]) {
        min = j;
      }
    }

    if (min !== i) {
      let temp = arrPositive[i];
      arrPositive[i] = arrPositive[min];
      arrPositive[min] = temp;
    }

    if (i === 0 && arrPositive[0] !== 1) {
      return 1;
    }
    if (i > 0) {
      if (arrPositive[i] - arrPositive[i - 1] > 1) {
        return arrPositive[i - 1] + 1;
      }
    }
  }

  return arrPositive.pop() + 1;
}
