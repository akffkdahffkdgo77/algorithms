/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze V
 *  Problem : 28927
 *  Algorithm : Math, Implementation, Arithmetic Operations
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim()
    .split('\n');

const [T1, E1, F1] = input[0].split(' ').map(Number);
const [T2, E2, F2] = input[1].split(' ').map(Number);
const sum1 = T1 * 3 + E1 * 20 + F1 * 120;
const sum2 = T2 * 3 + E2 * 20 + F2 * 120;

console.log(sum1 > sum2 ? 'Max' : sum1 < sum2 ? 'Mel' : 'Draw');
