/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 25858
 *  Algorithm : Math, Arithmetic Operations
 */

const [first, ...input] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n');

const [n, d] = first.split(' ').map(Number);
const total = input.map(Number).reduce((prev, cur) => prev + cur, 0);

let answer = '';
for (let i = 0; i < n; i++) {
    answer += `${Number(input[i]) * (d / total)}\n`;
}

console.log(answer.trim());
