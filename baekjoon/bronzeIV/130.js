/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 20233
 *  Algorithm : Math, Arithmetic Operations
 */

const [a, x, b, y, t] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(Number);

const totalTimeA = t > 30 ? t - 30 : 0;
const totalTimeB = t > 45 ? t - 45 : 0;

const firstOption = a + totalTimeA * x * 21;
const secondOption = b + totalTimeB * y * 21;

console.log(firstOption, secondOption);
