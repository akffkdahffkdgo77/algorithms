/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: Bronze IV
 *  Problem : 8723
 */

const [A, B, C] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n')[0]
    .split(' ')
    .map(Number);

const min = Math.min(A, B, C);
const max = Math.max(A, B, C);
const mid = [A, B, C].filter((val) => min !== val && max !== val)[0];

const allSame = [...new Set([A, B, C])].length === 1;
const isTri = Math.pow(min, 2) + Math.pow(mid, 2) === Math.pow(max, 2);

console.log(isTri ? 1 : allSame ? 2 : 0);
