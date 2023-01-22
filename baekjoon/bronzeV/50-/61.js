/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: Bronze V
 *  Problem : 24736
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n');

let answer = '';
input.forEach((value) => {
    const [T, F, S, P, C] = value.split(' ').map(Number);
    answer += `${T * 6 + F * 3 + S * 2 + P * 1 + C * 2} `;
});

console.log(answer);
