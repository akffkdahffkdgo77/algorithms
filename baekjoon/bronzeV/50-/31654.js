/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: Bronze V
 *  Problem : 31654
 *  Algorithm: Math, Arithmetic Operations
 */

const [A, B, C] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim()
    .split(' ')
    .map(Number);

console.log(A + B === C ? 'correct!' : 'wrong!');
