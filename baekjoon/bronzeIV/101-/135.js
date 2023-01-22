/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 20833
 *  Algorithm : Math, Implementation, Arithmetic Operations
 */

const N = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(Number)[0];

let answer = 0;
for (let i = 1; i <= N; i++) {
    answer += Math.pow(i, 3);
}

console.log(answer);
