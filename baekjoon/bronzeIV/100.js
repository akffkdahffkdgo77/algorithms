/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 15700
 *  Algorithm : Math, Arithmetic Operations
 */

const [N, M] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n')[0]
    .split(' ')
    .map(BigInt);

console.log(((N * M) / 2n).toString());
