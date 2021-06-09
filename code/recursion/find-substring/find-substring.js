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

  return [];
}

export function findSubstring2Way(s, words) {
  const res = [];
  if (s === null || s.length === 0 || words === null || words.length === 0) {
    return res;
  }
  const wordsLen = words.length;
  const singleWordLen = words[0].length;

  for (let i = 0; i <= s.length - wordsLen * singleWordLen; i++) {
    const w = [];
    for (let j = i; j < i + wordsLen * singleWordLen; j = j + singleWordLen) {
      w.push(s.slice(j, j + singleWordLen));
    }
    if (w.sort().join('') === [...words].sort().join('')) {
      res.push(i);
    }
  }
  return res;
}
