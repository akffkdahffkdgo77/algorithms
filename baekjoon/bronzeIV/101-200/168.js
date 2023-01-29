/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 25191
 *  Algorithm : Math, Arithmetic Operations
 */

const [N, input] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim()
    .split('\n');
const [A, B] = input.split(' ').map(Number);

const coke = Math.floor(A / 2);
const beer = B;

console.log(coke + beer > N ? N : coke + beer);
