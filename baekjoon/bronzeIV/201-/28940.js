/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 28940
 *  Algorithm : Math, Arithmetic Operations
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim()
    .split('\n');

const [w, h] = input[0].split(' ').map(Number);
const [n, a, b] = input[1].split(' ').map(Number);

if (a > w || b > h) {
    console.log(-1);
} else {
    const paper = Math.floor(w / a) * Math.floor(h / b);
    console.log(Math.ceil(n / paper));
}
