/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: Bronze I
 *  Problem : 11005
 *  Algorithm: Math, Implementation
 */

const [N, B] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split(' ')
    .map(Number);

console.log(N.toString(B).toUpperCase());
