/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 17356
 *  Algorithm : Math, Arithmetic Operations
 */

const [A, B] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n')[0]
    .split(' ')
    .map(Number);

const M = (B - A) / 400;
const p = 1 / (1 + Math.pow(10, M));

console.log(p);
