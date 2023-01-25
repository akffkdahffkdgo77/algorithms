/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 26592
 *  Algorithm : Math, Arithmetic Operations
 */

const [N, ...input] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim()
    .split('\n');

let answer = '';
input.forEach((val) => {
    const [area, base] = val.split(' ').map(Number);
    answer += `The height of the triangle is ${((2 * area) / base).toFixed(2)} units\n`;
});

console.log(answer.trim());
