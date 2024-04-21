/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : Bronze V
 *  Problem : 27219
 */

const N = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim();

const div = Math.floor(N / 5);
const remainder = N % 5;

console.log(`${'V'.repeat(div)}${'I'.repeat(remainder)}`);
