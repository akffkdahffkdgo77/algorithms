/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: CLASS 1
 *  Problem : 2908
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .split('\n')[0]
    .split(' ');

const first = input[0].split('').reverse().join('');
const second = input[1].split('').reverse().join('');
console.log(Math.max(...[first, second]));
