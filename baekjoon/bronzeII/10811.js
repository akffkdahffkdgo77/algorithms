/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: Bronze II
 *  Problem : 10811
 *  Algorithm: Implementation, Simulation
 */

const [num, ...list] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n');

const [N, M] = num.split(' ').map(Number);
let arr = [...Array(N).keys()].map((val) => val + 1);

for (let idx = 0; idx < M; idx++) {
    const [i, j] = list[idx].split(' ').map(Number);
    const reversed = arr.slice(i - 1, j).reverse();
    arr = [...arr.slice(0, i - 1), ...reversed, ...arr.slice(j)];
}

console.log(arr.join(' '));
