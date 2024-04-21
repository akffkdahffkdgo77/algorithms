/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : Bronze V
 *  Problem : 8437
 */

const [N, M] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(BigInt);

const Klaudia = (N + M) / 2n;
const Natalia = (N - M) / 2n;

console.log(Klaudia.toString());
console.log(Natalia.toString());
