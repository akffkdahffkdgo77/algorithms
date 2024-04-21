/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : Bronze IV
 *  Problem : 15025
 */

const [L, R] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n')[0]
    .split(' ')
    .map(Number);

console.log(L + R === 0 ? 'Not a moose' : L === R ? `Even ${L + R}` : `Odd ${L >= R ? L * 2 : R * 2}`);
