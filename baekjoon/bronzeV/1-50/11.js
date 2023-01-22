/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: Bronze V
 *  Problem : 5341
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(Number);

let answer = '';
input.forEach((length) => {
    if (length) {
        answer += `${Array.from({ length }).reduce((prev, _, i) => (prev += length - i), 0)} \n`;
    }
});

console.log(answer);
