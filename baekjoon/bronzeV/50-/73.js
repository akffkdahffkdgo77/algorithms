/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: Bronze V
 *  Problem : 26574
 */

const [N, ...input] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n');

let answer = '';
input.forEach((value, i) => {
    if (i < N) {
        answer += `${`${value} `.repeat(2).trim()} \n`;
    }
});
console.log(answer.trim());
