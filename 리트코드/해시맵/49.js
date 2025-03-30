/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const sorted = strs.map((str) => str.split("").sort().join(""));
  const m = new Map();

  sorted.forEach((e, i) => {
    if (m.has(e)) {
      m.get(e).push(strs[i]);
    } else {
      m.set(e, [strs[i]]);
    }
  });

  return Array.from(m.values());
};
