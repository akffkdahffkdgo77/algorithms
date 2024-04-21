/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 25591
 *  Algorithm : Math, Implementation, Arithmetic Operations
 */

const [x, y] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim()
    .split('\n')[0]
    .split(' ')
    .map(Number);

const a = 100 - x;
const b = 100 - y;

let c = 100 - (a + b);
let d = a * b;
let q = 0;
let r = d;

if (d >= 10) {
    q = Math.floor(d / 100);
    r = d % 100;
}

console.log(a, b, c, d, q, r);
console.log(c + q, r);
