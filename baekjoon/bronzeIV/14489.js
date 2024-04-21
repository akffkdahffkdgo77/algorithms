/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : Bronze IV
 *  Problem : 14489
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n');

const [A, B] = input[0].split(' ').map(Number);
console.log(A + B >= Number(input[1]) * 2 ? A + B - Number(input[1]) * 2 : A + B);
