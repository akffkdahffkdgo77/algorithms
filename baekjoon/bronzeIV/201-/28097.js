/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 28097
 *  Algorithm : Math, Arithmetic Operations
 */

const [N, input] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim()
    .split('\n');

const sum = input
    .split(' ')
    .map(Number)
    .reduce((prev, cur) => prev + cur, 0);
const total = Number(N) > 1 ? sum + (Number(N) - 1) * 8 : sum;

console.log(Math.floor(total / 24), total % 24);
