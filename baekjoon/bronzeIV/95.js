/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 10480
 *  Algorithm : Math, Implementation, Arithmetic Operations
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(Number);
input.shift();

let answer = '';
input.forEach((val) => {
    answer += `${val} is ${val % 2 === 0 ? 'even' : 'odd'}\n`;
});

console.log(answer.trim());
