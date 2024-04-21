/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 28248
 *  Algorithm : Math, Implementation, Arithmetic Operations
 */

const [N, P] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(Number);

console.log(N * 50 - P * 10 + (N > P ? 500 : 0));
