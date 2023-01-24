/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 25828
 *  Algorithm : Math, Arithmetic Operations
 */

const [G, P, T] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim()
    .split('\n')[0]
    .split(' ')
    .map(Number);

const groupTotal = G + P * T;
const individualTotal = G * P;

console.log(groupTotal === individualTotal ? 0 : groupTotal > individualTotal ? 1 : 2);
