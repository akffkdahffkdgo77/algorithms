/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: 새싹
 *  Type : 함수
 *  Problem : 2475
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .split('\n')[0];

const answer = input.split(' ').reduce((prev, cur) => (prev += cur * cur), 0);
console.log(answer % 10);
