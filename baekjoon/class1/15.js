/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: CLASS 1
 *  Problem : 2439
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .split('\n')[0];

let answer = '';
Array.from({ length: Number(input) }).forEach(
    (_, i) => (answer += `${String(' ').repeat(Number(input - i - 1))}${'*'.repeat(i + 1)} \n`)
);
console.log(answer);
