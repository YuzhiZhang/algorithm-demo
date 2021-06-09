/**
 * find substring
 * see: https://leetcode-cn.com/problems/substring-with-concatenation-of-all-words/
 * @param s
 * @param words
 * @returns {*[]}
 */
export function findSubstring(s, words) {
  const res = [];
  if (s === null || s.length === 0 || words === null || words.length === 0) {
    return res;
  }
  const num = words.length;

  // 枚举所有的子串组合
  const range = (r, arr) => {
    if (r.length === num) {
      res.push(r);
    } else {
      arr.forEach((item, index) => {
        let temp = [].concat(arr);
        temp.splice(index, 1);
        range(r.concat(item), temp);
      });
    }
  };

  range([], words);
  return res
    .map((item) => s.indexOf(item.join('')))
    .filter((item) => item !== -1)
    .sort((a, b) => a - b);
}

// 滑动窗口
export function findSubstring2Way(s, words) {
  const res = [];
  if (s === null || s.length === 0 || words === null || words.length === 0) {
    return res;
  }
  const wordsNum = words.length;
  const wordLen = words[0].length;

  // 窗口的长度 wordsNum * singleWordLen
  for (let i = 0; i <= s.length - wordsNum * wordLen; i++) {
    const w = [];
    for (let j = i; j < i + wordsNum * wordLen; j = j + wordLen) {
      w.push(s.slice(j, j + wordLen));
    }
    if (w.sort().join('') === [...words].sort().join('')) {
      res.push(i);
    }
  }
  return res;
}
