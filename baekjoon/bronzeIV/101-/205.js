/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 27262
 *  Algorithm : Math, Arithmetic Operations
 */

const [n, k, a, b] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim()
    .split(' ')
    .map(Number);

console.log(`${(k - 1) * b + b * (n - 1)} ${(n - 1) * a}`);
