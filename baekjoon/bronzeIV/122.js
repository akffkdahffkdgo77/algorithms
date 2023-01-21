/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 19602
 *  Algorithm : Math, Arithmetic Operations
 */

const [S, M, L] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(Number);

const happiness = 1 * S + 2 * M + 3 * L;
console.log(happiness < 10 ? 'sad' : 'happy');
