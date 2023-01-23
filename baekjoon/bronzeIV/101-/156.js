/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 24087
 *  Algorithm : Math, Arithmetic Operations
 */

const [S, A, B] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(Number);

console.log(S > A ? 250 + Math.ceil((S - A) / B) * 100 : 250);
