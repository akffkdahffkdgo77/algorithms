/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: Bronze IV
 *  Problem : 14173
 */

const [first, second] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n');

const [x1, y1, x2, y2] = first.split(' ').map(Number);
const [x3, y3, x4, y4] = second.split(' ').map(Number);
const maxX = Math.max(x1, x2, x3, x4);
const minX = Math.min(x1, x2, x3, x4);
const diffX = maxX - minX;

const maxY = Math.max(y1, y2, y3, y4);
const minY = Math.min(y1, y2, y3, y4);
const diffY = maxY - minY;

console.log(diffX >= diffY ? Math.pow(diffX, 2) : Math.pow(diffY, 2));
