/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 17009
 *  Algorithm : Math, Implementation, Arithmetic Operations
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(Number);

const scores = [3, 2, 1];
const apples = input.slice(0, 3).reduce((prev, cur, i) => prev + cur * scores[i], 0);
const bananas = input.slice(3).reduce((prev, cur, i) => prev + cur * scores[i], 0);

console.log(apples > bananas ? 'A' : bananas > apples ? 'B' : 'T');
