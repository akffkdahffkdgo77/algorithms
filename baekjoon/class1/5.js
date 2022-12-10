/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: CLASS 1
 *  Problem : 2920
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .split('\n')[0]
    .split(' ');

const asc = [...input].sort((a, b) => a - b);
const desc = [...input].sort((a, b) => +b - +a);

const isAscending = input.every((v, i) => v === asc[i]);
const isDescending = input.every((v, i) => v === desc[i]);
const answer = isAscending ? 'ascending' : isDescending ? 'descending' : 'mixed';

console.log(answer);
