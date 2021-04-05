/**
 * see:// https://leetcode-cn.com/problems/regular-expression-matching/
 * @param {string} s string
 * @param {string} p pattern
 */
export function isMatch(s, p) {
  // 边界情况，若果s和p都为空，说明处理结束，
  if (p.length <= 0) {
    return !s.length;
  }

  // 判断p模式的第一个字符是否和字符串s的第一个字符匹配
  let match = false;

  if ((s.length > 0 && p[0] === s[0]) || p[0] === '.') {
    match = true;
  }

  // p有模式
  if (p.length > 1 && p[1] === '*') {
    // 第一种情况： s*匹配0个字符
    // 第二种情况： s*匹配一个字符，则后续字符进行递归，用来表示s*匹配多个s
    return isMatch(s, p.slice(2)) || (match && isMatch(s.slice(1), p));
  } else {
    // p无模式,直接进行字符串比较
    // 如果第一个字符匹配上了，则已经匹配的字符和模式扔掉，用剩下的字符和模式进行匹配
    return match && isMatch(s.slice(1), p.slice(1));
  }
}

/**
 * see: https://leetcode-cn.com/problems/regular-expression-matching/solution/shou-hui-tu-jie-wo-tai-nan-liao-by-hyj8/
 * 基于动态规划的思想
 * @param s
 * @param p
 * @returns {boolean|*}
 */
export function isMatch2Way(s, p) {
  if (s == null || p == null) return false;

  const sLen = s.length,
    pLen = p.length;

  const dp = new Array(sLen + 1);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(pLen + 1).fill(false); // 将项默认为false
  }
  // base case
  dp[0][0] = true;
  for (let j = 1; j < pLen + 1; j++) {
    if (p[j - 1] === '*') dp[0][j] = dp[0][j - 2];
  }
  // 迭代
  for (let i = 1; i < sLen + 1; i++) {
    for (let j = 1; j < pLen + 1; j++) {
      if (s[i - 1] === p[j - 1] || p[j - 1] === '.') {
        dp[i][j] = dp[i - 1][j - 1];
      } else if (p[j - 1] === '*') {
        if (s[i - 1] === p[j - 2] || p[j - 2] === '.') {
          dp[i][j] = dp[i][j - 2] || dp[i - 1][j - 2] || dp[i - 1][j];
        } else {
          dp[i][j] = dp[i][j - 2];
        }
      }
    }
  }
  return dp[sLen][pLen]; // 长sLen的s串 是否匹配 长pLen的p串
}
