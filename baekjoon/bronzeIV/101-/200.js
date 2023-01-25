/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 27110
 *  Algorithm : Math, Arithmetic Operations
 */

const [N, input] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim()
    .split('\n');

const [A, B, C] = input.split(' ').map(Number);

console.log(Math.min(N, A) + Math.min(N, B) + Math.min(N, C));
