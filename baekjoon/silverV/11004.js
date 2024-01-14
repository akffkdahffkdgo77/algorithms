/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Silver V
 *  Problem : 11004
 *  Algorithm : Sorting
 */

const [first, input] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n');

const [N, K] = first.split(' ').map(Number);
const list = input
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);

console.log(list[K - 1]);
