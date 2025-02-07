/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {
  const m = new Map();
  let answer = [];

  for (const [from, to] of tickets) {
    if (!m.get(from)) m.set(from, [to]);
    else {
      m.get(from).push(to);
      m.get(from).sort((a, b) => b.localeCompare(a));
    }
  }

  const dfs = (depart) => {
    const dest = m.get(depart);
    while (dest && dest.length) {
      dfs(dest.pop());
    }
    answer.push(depart);
  };

  dfs("JFK");
  answer.reverse();
  return answer;
};
