/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : Bronze V
 *  Problem : 28938
 *  Algorithm : Math, Implementation, Arithmetic Operations
 */

const [N, input] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim()
    .split('\n');

const num = input
    .split(' ')
    .map(Number)
    .reduce((prev, cur) => prev + cur, 0);

console.log(num > 0 ? 'Right' : num < 0 ? 'Left' : 'Stay');
