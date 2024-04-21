/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : Bronze III
 *  Problem : 10162
 *  Algorithm : 수학, 구현, 그리디 알고리즘
 */

const T = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n')[0];

const A = 5 * 60;
const B = 1 * 60;
const C = 10;

const totalA = Math.floor(T / A);
const totalB = Math.floor((T % A) / B);
const totalC = Math.floor((T % B) / C);

if (totalA * A + totalB * B + totalC * C !== Number(T)) {
    console.log(-1);
} else {
    console.log(totalA, totalB, totalC);
}
