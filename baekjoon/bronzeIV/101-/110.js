/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 17362
 *  Algorithm : Math, Arithmetic Operations
 */

const N = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(Number)[0];

// 1 - 9
// 2 - 10
// 3 - 11
// 4 - 12
// 5 - 13
const remainder = N % 8;

// 0 -> 2
// 7 -> 3
// 6 -> 4
if (remainder && remainder <= 5) {
    console.log(remainder);
} else if (remainder === 0) {
    console.log(2);
} else {
    console.log(10 - remainder);
}
