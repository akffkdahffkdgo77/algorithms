/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 20839
 *  Algorithm : Implementation, 많은 조건 분기
 */

const [first, second] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n');

const [x, y, z] = first.split(' ').map(Number);
const [x1, y1, z1] = second.split(' ').map(Number);

const E = z1 >= z;
const D = E && y1 >= Math.ceil(y / 2);
const C = E && y1 >= y;
const B = C && x1 >= Math.ceil(x / 2);
const A = B && x1 >= x;

const obj = { A, B, C, D, E };
console.log(Object.keys(obj).filter((key) => obj[key])[0]);
