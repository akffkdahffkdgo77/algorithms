/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 18330
 *  Algorithm : Math, Arithmetic Operations
 */

const [N, K] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(Number);

const totalQuota = K + 60;
if (totalQuota >= N) {
    console.log(N * 1500);
} else {
    console.log(totalQuota * 1500 + (N - totalQuota) * 3000);
}
