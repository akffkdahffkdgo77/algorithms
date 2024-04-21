/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : Bronze V
 *  Problem : 27328
 *  Algorithm : Math, Implementation, Arithmetic Operations
 */

const [A, B] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(Number);

console.log(A < B ? -1 : A === B ? 0 : 1);
