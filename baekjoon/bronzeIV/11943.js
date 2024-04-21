/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : Bronze IV
 *  Problem : 11943
 */

const [ASET, BSET] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n');

const [A, B] = ASET.split(' ').map(Number);
const [C, D] = BSET.split(' ').map(Number);
const firstMax = A + D;
const secondMax = B + C;

console.log(firstMax >= secondMax ? secondMax : firstMax);
