/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 27267
 *  Algorithm : Math, Arithmetic Operations
 */

const [a, b, c, d] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim()
    .split(' ')
    .map(Number);

console.log(a * b === c * d ? 'E' : a * b > c * d ? 'M' : 'P');
