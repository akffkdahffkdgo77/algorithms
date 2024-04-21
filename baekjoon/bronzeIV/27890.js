/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 27890
 *  Algorithm : Math, Implementation, Arithmetic Operations
 */

let [X, N] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim()
    .split(' ')
    .map(Number);

// X0 ~ XN까지
for (let i = 0; i < N; i++) {
    if (X % 2 === 0) {
        X = (X / 2) ^ 6;
    } else {
        X = (2 * X) ^ 6;
    }
}

console.log(X);
