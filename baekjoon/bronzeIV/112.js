/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 17874
 *  Algorithm : Math, Arithmetic Operations
 */

const [N, H, V] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n')[0]
    .split(' ')
    .map(Number);

const topLeft = H * V * 4;
const topRight = H * (N - V) * 4;
const bottomLeft = (N - H) * V * 4;
const bottomRight = (N - H) * (N - V) * 4;
const max = Math.max(topLeft, topRight, bottomLeft, bottomRight);

console.log(max);
