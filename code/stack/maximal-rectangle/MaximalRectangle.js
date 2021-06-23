/**
 * see:https://leetcode-cn.com/problems/maximal-rectangle/
 * @param {string[][]} matrix
 * @returns {number}
 */
export function maximalRectangleWay1(matrix) {
  const result = [];
  const reg = /1{2,}/g;

  const stack = matrix.map((item) => {
    const str = item.join('');
    const rs = [];
    let r = reg.exec(str);
    while (r) {
      rs.push([r.index, r.index + r[0].length - 1]);
      r = reg.exec(str);
    }

    return rs;
  });

  // 通过递归计算相邻的矩阵；
  const maxRect = (arr, res = [], n = 1) => {
    const top = arr.pop();
    const next = arr.pop();
    let tt;
    let nn;
    let start;
    let end;
    let width = 1;
    let maxWidth = 1;
    // 表示处理了几行，top和next是2行，n从1开始，所以首先n++
    n++;
    // 计算相邻的两行1的交叉，比如 0111001和0011000，交叉后成 11即[2,3]
    for (let i = 0, il = top.length; i < il; i++) {
      tt = top[i];
      for (let j = 0, jl = next.length; j < jl; j++) {
        nn = next[j];
        width = Math.min(tt[1], nn[1]) - Math.max(tt[0], nn[0]);
        if (width >= maxWidth) {
          maxWidth = width;
          start = Math.max(tt[0], nn[0]);
          end = Math.min(tt[1], nn[1]);
        }
      }
    }
    // 如果没有找到交叉点
    if (start === undefined || end === undefined) {
      // 判断是不是处理超过3行，没超过直接返回false
      if (n < 3) {
        return false;
      } else {
        // 超过3行，说明上一次的结果和当前行没有交叉，返回上一次的结果即可
        width = top[0][1] - top[0][0] + 1;
        if (width > 1) {
          res.push((n - 1) * width);
        }
      }
    } else {
      // 找到交叉点继续下一行
      if (arr.length > 0) {
        arr.push([[start, end]]);
        maxRect(arr, res, n++);
      } else {
        // 从某一行一直计算到最后一行，这个时候start和end一直有值，所以不会进入到if层，这个时候n就是累计的行数（高），end-start+1就是宽
        res.push(n * (end - start + 1));
      }
    }
  };
  // 每一次寻找最大矩形，找不到交叉点就结束了
  while (stack.length > 1) {
    maxRect([].concat(stack), result);
    stack.pop();
  }
  // 为什么有这一行，理论上arr已经为1行了
  // maxRect(arr, result)

  let max = 0;
  let item = result.pop();
  while (item) {
    if (item > max) {
      max = item;
    }
    item = result.pop();
  }
  return max > 0 ? max : 0;
}

export function maximalRectangleWay2(matrix) {
  // rows
  const m = matrix.length;
  if (m === 0) {
    return 0;
  }
  // cols
  const n = matrix[0].length;
  const left = new Array(m).fill(0).map(() => new Array(n).fill(0));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === '1') {
        left[i][j] = (j === 0 ? 0 : left[i][j - 1]) + 1;
      }
    }
  }

  let ret = 0;
  // 单调栈
  // 对于每一列，使用基于柱状图的方法
  for (let j = 0; j < n; j++) {
    // up哨兵-1，down哨兵m
    /*const up = new Array(m).fill(0);
    const down = new Array(m).fill(0);

    let stack = [];
    for (let i = 0; i < m; i++) {
      while (stack.length && left[stack[stack.length - 1]][j] >= left[i][j]) {
        stack.pop();
      }
      up[i] = stack.length === 0 ? -1 : stack[stack.length - 1];
      stack.push(i);
    }
    stack = [];
    for (let i = m - 1; i >= 0; i--) {
      while (stack.length && left[stack[stack.length - 1]][j] >= left[i][j]) {
        stack.pop();
      }
      down[i] = stack.length === 0 ? m : stack[stack.length - 1];
      stack.push(i);
    }
    */

    const up = new Array(m).fill(0);
    const down = new Array(m).fill(m);

    let stack = [];
    for (let i = 0; i < m; i++) {
      while (stack.length && left[stack[stack.length - 1]][j] >= left[i][j]) {
        // 常数优化
        // 当位置i被弹出栈时,说明此时遍历到的位置i0,的高度小于等于left[i][j],
        // 并且在i0与i之间没有高度小于等于left[i][j]的柱子
        down[stack[stack.length - 1]] = i;
        stack.pop();
      }
      up[i] = stack.length === 0 ? -1 : stack[stack.length - 1];
      stack.push(i);
    }
    /*stack = [];
    for (let i = m - 1; i >= 0; i--) {
      while (stack.length && left[stack[stack.length - 1]][j] >= left[i][j]) {
        stack.pop();
      }
      down[i] = stack.length === 0 ? m : stack[stack.length - 1];
      stack.push(i);
    }*/

    for (let i = 0; i < m; i++) {
      const height = down[i] - up[i] - 1;
      const area = height * left[i][j];
      ret = Math.max(ret, area);
    }
  }
  return ret;
}
