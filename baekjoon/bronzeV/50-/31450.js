/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze V
 *  Problem : 31450
 *  Algorithm : Math, Arithmetic Operations
 */

const [M, K] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim()
    .split(' ')
    .map(Number);

console.log(M % K === 0 ? 'Yes' : 'No');
