/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: Bronze V
 *  Problem : 26575
 */

const [N, ...input] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n');

let answer = '';
input.forEach((value, i) => {
    if (i < N) {
        const [D, F, P] = value.split(' ').map(Number);
        answer += `$${(D * F * P).toFixed(2)} \n`;
    }
});
console.log(answer.trim());
