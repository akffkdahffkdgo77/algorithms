/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 21633
 *  Algorithm : Math, Implementation, Arithmetic Operations
 */

const K = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(Number)[0];

const commission = 25 + K * 0.01;
console.log(commission < 100 ? (100).toFixed(2) : commission >= 2000 ? (2000).toFixed(2) : commission.toFixed(2));
