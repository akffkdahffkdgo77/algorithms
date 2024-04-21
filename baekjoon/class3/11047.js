/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : CLASS 3 (Silver IV)
 *  Problem : 11047
 *  Algorithm : 그리디 알고리즘
 */

const [first, ...input] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n');

const [N, K] = first.split(' ').map(Number);
const list = input.map(Number);

let count = 0;
let remainder = K;
for (let i = N - 1; i >= 0; i--) {
    count += Math.floor(remainder / list[i]);
    remainder = remainder % list[i];
}
console.log(count);
