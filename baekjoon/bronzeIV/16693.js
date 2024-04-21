/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 16693
 *  Algorithm : Math, Implementation, Geometry, Arithmetic Operations
 */

const [first, second] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n');

const [A1, P1] = first.split(' ').map(Number);
const [R1, P2] = second.split(' ').map(Number);
const slicePizza = A1 / P1;
const wholePizza = (R1 * R1 * Math.PI) / P2;

console.log(wholePizza > slicePizza ? 'Whole pizza' : 'Slice of pizza');
