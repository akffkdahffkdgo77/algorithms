/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: Bronze V
 *  Problem : 4101
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n');

let answer = '';
input.forEach((value) => {
    if (value) {
        const [A, B] = value.split(' ').map(Number);
        answer += A && B ? `${A > B ? 'Yes' : 'No'} \n` : '';
    }
});

console.log(answer.trim());
