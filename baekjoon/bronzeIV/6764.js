/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : Bronze IV
 *  Problem : 6764
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(Number);

const isAscending = [...input].sort().every((val, index) => val === input[index]);
const isDescending = [...input].sort((a, b) => b - a).every((val, index) => val === input[index]);
const isSame = [...new Set(input)].length === 1;
const isDuplicated = (isAscending || isDescending) && [...new Set(input)].length !== 4;

console.log(
    isSame
        ? 'Fish At Constant Depth'
        : isAscending && !isDuplicated
        ? 'Fish Rising'
        : isDescending && !isDuplicated
        ? 'Fish Diving'
        : 'No Fish'
);
