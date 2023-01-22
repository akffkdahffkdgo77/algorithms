/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: Bronze IV
 *  Problem : 2845
 */

const [first, second] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n');

const [L, P] = first.split(' ').map(Number);
const [A, B, C, D, E] = second.split(' ').map(Number);
const total = L * P;

console.log(`${A - total} ${B - total} ${C - total} ${D - total} ${E - total}`);
