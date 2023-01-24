/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 25784
 *  Algorithm : Math, Implementation, Sort, Arithmetic Operations
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim()
    .split('\n')[0]
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);

const sum = input[2] === input[0] + input[1];
const multiple = input[2] === input[0] * input[1];

console.log(sum ? 1 : multiple ? 2 : 3);
