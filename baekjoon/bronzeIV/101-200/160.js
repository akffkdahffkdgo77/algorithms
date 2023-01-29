/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 24294
 *  Algorithm : Math, Arithmetic Operations
 */

const [w1, h1, w2, h2] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(Number);

console.log(4 + Math.max(w1, w2) * 2 + (h1 + h2) * 2);
