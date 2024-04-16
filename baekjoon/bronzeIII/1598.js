/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : Bronze III
 *  Problem : 1598
 *  Algorithm : Math, Arithmetic Operations
 */

const [A, B] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split(' ')
    .map(Number);

const firstX = Math.ceil(A / 4);
const firstY = A % 4 || (A > 4 ? 4 : A);

const secondX = Math.ceil(B / 4);
const secondY = B % 4 || (B > 4 ? 4 : B);

const xSum = Math.abs(firstX - secondX);
const ySum = Math.abs(firstY - secondY);
console.log(xSum + ySum);
