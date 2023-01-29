/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 23825
 *  Algorithm : Math, Arithmetic Operations
 */

const [N, M] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim()
    .split('\n')[0]
    .split(' ')
    .map(Number);

console.log(Math.min(Math.floor(N / 2), Math.floor(M / 2)));
