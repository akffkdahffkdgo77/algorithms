/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : Bronze III
 *  Problem : 2903
 *  Algorithm : Math
 */

const N = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim();
const num = Number(N);

/**
 *  한 줄에 있는 점의 수
 *  0 0 2 -> 2 = 2 + 0
 *  1 1 3 -> 3 = 2 + 2^0
 *  2 2 5 -> 5 = 3 + 2^1
 *  3 4 9 -> 9 = 5 + 2^2
 *  4 8 17 -> 17 = 9 + 2^3
 *  5 16 33 -> 33 = 17 + 2^4
 */

/**
 *  점의 수
 *  0 4 (2*2)
 *  1 9 (3*3)
 *  2 25 (5*5)
 *  3 81 (9*9)
 *  4 289 (17*17)
 *  5 1089 (33*33)
 */

const sum = [];
let x = 2;
for (let i = 0; i < num; i++) {
    x += Math.pow(2, i);
    sum.push(Math.pow(x, 2));
}
console.log(sum[num - 1]);
