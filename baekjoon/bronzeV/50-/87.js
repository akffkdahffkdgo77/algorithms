/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: Bronze V
 *  Problem : 27433
 *  Algorithm: Math, Arithmetic Operations
 */

const N = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim();

let count = Number(N);
let factorial = 1;
while (count > 1) {
    factorial *= count;
    count--;
}
console.log(factorial);
