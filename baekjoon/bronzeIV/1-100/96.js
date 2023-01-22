/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 15051
 *  Algorithm : Math, Implementation, Arithmetic Operations
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(Number);

let min = Number.MAX_SAFE_INTEGER;
for (let i = 0; i < input.length; i++) {
    const sum = input.reduce((prev, cur, index) => (prev += Math.abs(i - index) * cur * 2), 0);
    min = Math.min(min, sum);
}

console.log(min);
