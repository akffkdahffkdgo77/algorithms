/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: Bronze V
 *  Problem : 3003
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n')[0]
    .split(' ')
    .map(Number);

const PIECES = [1, 1, 2, 2, 2, 8];

console.log(`${PIECES.reduce((prev, cur, i) => (prev += `${cur - input[i]} `), '')}`);
