/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: Bronze V
 *  Problem : 27324
 *  Algorithm: Math, Arithmetic Operations
 */

const [A, B] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim()
    .split('')
    .map(Number);

console.log(A === B ? 1 : 0);
