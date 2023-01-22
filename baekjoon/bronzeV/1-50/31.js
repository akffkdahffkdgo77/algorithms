/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: Bronze V
 *  Problem : 14581
 */

const ID = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n')[0];

let answer = '';
Array.from({ length: 9 }).forEach((_, i) => {
    answer += i === 4 ? `:${ID}:` : ':fan:';
    if ((i + 1) % 3 === 0) {
        answer += '\n';
    }
});

console.log(answer.trim());
