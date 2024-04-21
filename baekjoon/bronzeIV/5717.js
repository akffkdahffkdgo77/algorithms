/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : Bronze IV
 *  Problem : 5717
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n');

let answer = '';
input.forEach((val) => {
    const [M, F] = val.split(' ').map(Number);
    if (M && F) {
        answer += `${M + F} \n`;
    }
});

console.log(answer.trim());
