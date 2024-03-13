/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze V
 *  Problem : 31614
 *  Algorithm : Math, Arithmetic Operations
 */

const [H, M] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(Number);

console.log(H * 60 + M);
