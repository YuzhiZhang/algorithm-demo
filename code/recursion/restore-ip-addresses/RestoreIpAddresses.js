/**
 * restore ip addresses
 * see: https://leetcode-cn.com/problems/restore-ip-addresses/
 * @param str
 * @returns {*}
 */
export function restoreIpAddresses(str) {
  const result = [];
  const dfs = (curr, sub) => {
    // 超过12个字符无法组合成对应的IPV4地址
    if (str.length > 12) {
      return;
    }
    if (curr.length === 4 && curr.join('') === str) {
      result.push(curr.join('.'));
    } else {
      for (let i = 0, len = Math.min(3, sub.length), temp; i < len; i++) {
        temp = sub.substr(0, i + 1);
        if (temp - 256 < 0) {
          dfs(curr.concat([temp * 1]), sub.substr(i + 1));
        }
      }
    }
  };
  dfs([], str);

  return result;
}

export function restoreIpAddresses2Way(str) {
  const SEG_COUNT = 4;
  const segments = new Array(SEG_COUNT);
  const res = [];
  const dfs = (str, segId, segStart) => {
    // 超过12个字符无法组合成对应的IPV4地址
    if (str.length > 12) {
      return;
    }

    // 如果找到了 4 段 IP 地址并且遍历完了字符串，那么就是一种答案
    if (segId === SEG_COUNT) {
      if (segStart === str.length) {
        res.push(segments.join('.'));
      }
      return;
    }

    // 如果还没有找到 4 段 IP 地址就已经遍历完了字符串，那么提前回溯
    if (segStart === str.length) {
      return;
    }

    // 由于不能有前导零，如果当前数字为 0，那么这一段 IP 地址只能为 0
    if (str.charAt(segStart) === '0') {
      segments[segId] = 0;
      dfs(str, segId + 1, segStart + 1);
    }
    // 通常的情况
    let addr = 0;
    for (let segEnd = segStart; segEnd < str.length; ++segEnd) {
      addr = addr * 10 + (str.charAt(segEnd) - '0');
      if (addr > 0 && addr <= 0xff) {
        segments[segId] = addr;
        dfs(str, segId + 1, segEnd + 1);
      } else {
        break;
      }
    }
  };

  dfs(str, 0, 0);

  return res;
}
