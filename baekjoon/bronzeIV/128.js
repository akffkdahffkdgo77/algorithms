/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 25881
 *  Algorithm : Math, Arithmetic Operations
 */

const [first, N, ...input] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n');

const [G, A] = first.split(' ').map(Number);

const answer = input
    .map(Number)
    .reduce((prev, cur) => (prev += `${cur} ${cur > 1000 ? 1000 * G + (cur - 1000) * A : cur * G}\n`), '');

console.log(answer.trim());
