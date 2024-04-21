/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 26767
 *  Algorithm : Math, Implementation, Arithmetic Operations
 */

const N = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim();

let answer = '';
for (let i = 1; i <= N; i++) {
    const isSeven = i % 7 === 0;
    const isEleven = i % 11 === 0;

    if (isSeven && !isEleven) {
        answer += 'Hurra!\n';
    } else if (!isSeven && isEleven) {
        answer += 'Super!\n';
    } else if (isSeven && isEleven) {
        answer += 'Wiwat!\n';
    } else {
        answer += `${i}\n`;
    }
}

console.log(answer.trim());
