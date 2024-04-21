/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : Bronze IV
 *  Problem : 13866
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n')[0]
    .split(' ')
    .map(Number);

const max = Math.max(...input);
const min = Math.min(...input);

const sum = input.reduce((prev, cur) => (prev += cur), 0);
const firstPair = max + min;
const secondPair = sum - firstPair;

console.log(Math.abs(secondPair - firstPair));
