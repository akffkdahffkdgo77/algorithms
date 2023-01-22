/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 18414
 *  Algorithm : Implementation
 */

const [X, L, R] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n')[0]
    .split(' ')
    .map(Number);

let prev = Number.MAX_SAFE_INTEGER;
for (let i = L; i <= R; i++) {
    if (Math.abs(X - i) < Math.abs(X - prev)) {
        prev = i;
    }
}

console.log(prev);
