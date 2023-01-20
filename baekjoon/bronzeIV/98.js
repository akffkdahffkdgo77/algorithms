/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 15372
 *  Algorithm : Math, Arithmetic Operations
 */

const [T, ...N] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(Number);

let answer = '';
for (let i = 0; i < T; i++) {
    answer += `${N[i] * N[i]}\n`;
}

console.log(answer.trim());
