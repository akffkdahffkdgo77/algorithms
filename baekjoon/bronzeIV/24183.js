/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 24183
 *  Algorithm : Math, Arithmetic Operations
 */

const [C4, A3, A4] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim()
    .split('\n')[0]
    .split(' ')
    .map(Number);

const C4total = C4 * ((324 * 229) / 1000000) * 2;
const A3total = A3 * ((420 * 297) / 1000000) * 2;
const A4total = A4 * ((297 * 210) / 1000000);

console.log(C4total + A3total + A4total);
