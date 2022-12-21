/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: Bronze IV
 *  Problem : 2440
 */

const N = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n')[0];

let answer = '';
Array.from({ length: N }).forEach((_, i) => {
    answer += `${'*'.repeat(N - i)} \n`;
});

console.log(answer.trim());
