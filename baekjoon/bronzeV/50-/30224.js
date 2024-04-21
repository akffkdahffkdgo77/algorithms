/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : Bronze V
 *  Problem : 30224
 *  Algorithm : Math, Implementation
 */

const N = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim();

const num = Number(N);
if (N.includes('7')) {
    if (num % 7 === 0) {
        console.log(3);
    } else {
        console.log(2);
    }
} else {
    if (num % 7 === 0) {
        console.log(1);
    } else {
        console.log(0);
    }
}
