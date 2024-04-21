/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : Bronze V
 *  Problem : 11021
 */

const [N, ...input] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n');

let answer = '';
input.forEach((value, index) => {
    if (index < N) {
        const [A, B] = value.split(' ').map(Number);
        answer += `Case #${index + 1}: ${A + B} \n`;
    }
});

console.log(answer.trim());
