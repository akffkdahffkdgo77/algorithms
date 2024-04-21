/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 31607
 *  Algorithm : Math, Sort, Arithmetic Operations
 */

const [A, B, C] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(Number);

const sumAB = A + B;
const sumBC = B + C;
const sumAC = A + C;

if (sumAB === C || sumBC === A || sumAC === B) {
    console.log(1);
} else {
    console.log(0);
}
