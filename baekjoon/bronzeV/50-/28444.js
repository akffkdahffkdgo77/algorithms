/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: Bronze V
 *  Problem : 28444
 *  Algorithm: Math, Arithmetic Operations
 */

const [H, I, A, R, C] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim()
    .split(' ')
    .map(Number);

console.log(H * I - A * R * C);
