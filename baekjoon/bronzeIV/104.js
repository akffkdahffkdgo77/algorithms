/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 16486
 *  Algorithm : Math, Geometry
 */

const [D1, D2] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(Number);

const pie = 3.141592;
console.log(D1 * 2 + 2 * pie * D2);
