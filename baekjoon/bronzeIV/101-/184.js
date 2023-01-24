/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 26332
 *  Algorithm : Math, Arithmetic Operations
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim()
    .split('\n');
input.shift();

let answer = '';
input.forEach((val) => {
    const [C, P] = val.split(' ').map(Number);
    answer += `${val}\n`;
    answer += `${C * P - (C - 1) * 2}\n`;
});

console.log(answer.trim());
