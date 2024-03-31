/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 28519
 *  Algorithm : Math, Arithmetic Operations
 */

const [N, M] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim()
    .split(' ')
    .map(Number);

const max = Math.max(N, M);
const min = Math.min(N, M);

if (max === min) {
    console.log(N + M);
} else {
    console.log(min * 2 + 1);
}
