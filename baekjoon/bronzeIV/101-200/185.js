/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 26340
 *  Algorithm : Math, Implementation, Arithmetic Operations
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim()
    .split('\n');
input.shift();

let answer = '';
input.forEach((val) => {
    let [A, B, C] = val.split(' ').map(Number);
    answer += `Data set: ${val}\n`;
    for (let i = 0; i < C; i++) {
        if (A > B) {
            A = Math.floor(A / 2);
        } else {
            B = Math.floor(B / 2);
        }
    }
    answer += `${Math.max(A, B)} ${Math.min(A, B)}\n\n`;
});

console.log(answer.trim());
