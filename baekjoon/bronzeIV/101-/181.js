/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 25991
 *  Algorithm : Math, Arithmetic Operations
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim()
    .split('\n');
input.shift();

// N개의 container
// container별로 side 길이
const sum = input[0]
    .split(' ')
    .map(Number)
    .reduce((prev, cur) => prev + Math.pow(cur, 3), 0);

console.log(Math.cbrt(sum));
