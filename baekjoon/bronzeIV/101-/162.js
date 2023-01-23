/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 24365
 *  Algorithm : Math, Arithmetic Operations
 */

const [A, B, C] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim()
    .split('\n')[0]
    .split(' ')
    .map(Number);

const avg = (A + C) / 2;
console.log((C - avg) * 2);
