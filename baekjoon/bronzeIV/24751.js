/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 24751
 *  Algorithm : Math, Arithmetic Operations
 */

const A = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(Number)[0];

console.log(1 / (A / 100));
console.log(1 / ((100 - A) / 100));
