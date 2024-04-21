/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze III
 *  Problem : 23375
 *  Algorithm : Math, Geometry, Arithmetic Operations
 */

// 예제 무시해야 함
const [coords, r] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim()
    .split('\n');

const [x, y] = coords.split(' ').map(Number);

const firstX = Number(r) + x;
const secondX = x - Number(r);
const firstY = Number(r) + y;
const secondY = y - Number(r);

console.log(firstX, firstY);
console.log(firstX, secondY);
console.log(secondX, secondY);
console.log(secondX, firstY);
