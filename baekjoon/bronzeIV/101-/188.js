/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 26500
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
    const [x, y] = val.split(' ').map(Number);
    answer += `${Math.abs(x - y).toFixed(1)}\n`;
});
console.log(answer.trim());
