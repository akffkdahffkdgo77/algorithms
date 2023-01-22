/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 21612
 *  Algorithm : Math, Implementation, Arithmetic Operations
 */

const B = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(Number)[0];

const P = 5 * B - 400;

console.log(P);
console.log(P === 100 ? 0 : P > 100 ? -1 : 1);
