/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 29807
 *  Algorithm : Math, Implementation, Arithmetic Operations
 */

const [N, input] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim()
    .split('\n');

let [a, b, c, d, e] = Array.from({ length: 5 }, (_, idx) => Number(input.split(' ')[idx]) || 0);

let total = 0;
total += a > c ? (a - c) * 508 : (c - a) * 108;
total += b > d ? (b - d) * 212 : (d - b) * 305;
total += e * 707;

console.log(total * 4763);
