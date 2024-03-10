/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 30319
 *  Algorithm : Math, Implementation, Arithmetic Operations
 */

const [Y, M, D] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim()
    .split('-')
    .map(Number);
console.log((M === 9 && D <= 16) || M < 9 ? 'GOOD' : 'TOO LATE');
