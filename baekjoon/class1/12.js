/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: CLASS 1
 *  Problem : 1152
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .split('\n')[0];

const answer = input.split(' ').filter((v) => v);
console.log(answer.length);
