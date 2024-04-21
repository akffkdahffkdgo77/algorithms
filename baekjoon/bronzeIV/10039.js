/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : Bronze IV
 *  Problem : 10039
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(Number);

const answer = input.reduce((prev, cur) => (prev += cur < 40 ? 40 : cur), 0) / input.length;
console.log(parseInt(answer, 10));
