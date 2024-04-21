/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : Bronze IV
 *  Problem : 14470
 */

const [A, B, C, D, E] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(Number);

let time = 0;
if (A < 0) {
    time = Math.abs(A) * C + D + B * E;
} else {
    time = (B - A) * E;
}

console.log(time);
