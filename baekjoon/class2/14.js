/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: CLASS 2
 *  Problem : 2751
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(Number);

input.shift();
const answer = input.sort((a, b) => a - b).join('\n');
console.log(answer);
