/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 27239
 *  Algorithm : Math, Implementation, String, Arithmetic Operations
 */

const N = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim();

console.log(`${String.fromCharCode((N % 8 ? N % 8 : 8) + 96)}${Math.ceil(N / 8)}`);
