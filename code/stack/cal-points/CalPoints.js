/**
 * see: https://leetcode-cn.com/problems/baseball-game/
 * @param {string[]} ops
 * @return {number}
 */
export function callPoints(ops) {
  const stack = [];
  ops.forEach((item) => {
    let pre1,
      pre2,
      len = stack.length;
    switch (item) {
      case '+':
        pre1 = Number(stack[len - 1]) || 0;
        pre2 = Number(stack[len - 2]) || 0;
        stack.push(pre1 + pre2);
        break;

      case 'D':
        pre1 = Number(stack[len - 1]) || 0;
        stack.push(pre1 * 2);
        break;

      case 'C':
        if (len) {
          stack.pop();
        }
        break;
      default:
        stack.push(item * 1);
    }
  });
  return stack.reduce((prev, curr) => prev + curr);
}
