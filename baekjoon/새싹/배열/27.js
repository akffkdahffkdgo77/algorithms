/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: 새싹
 *  Type : 배열
 *  Problem : 10807
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .split('\n');

const numList = input[1].split(' ');
const V = input[2];

let count = 0;
numList.forEach((value) => +value === +V && count++);

console.log(count);
