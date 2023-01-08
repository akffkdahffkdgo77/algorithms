/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: Bronze IV
 *  Problem : 14264
 */

const N = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n');

// (30, 60, 90) 삼각형 -> 2a, a, √3a
// (45, 45, 90) 삼각형 -> √2a, a, a

// 2a = N
// a -> N / 2
// √3a -> √3N / 2

// (√3N / 2) * 2 * (N / 2)
// ->  √3N * N/2
// -> (√3/2 * N^2) * 1/2
// ->> √3/4 * N^2
console.log((Math.sqrt(3) / 4) * Math.pow(N, 2));
