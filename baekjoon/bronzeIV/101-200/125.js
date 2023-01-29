/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 20215
 *  Algorithm : Math, Geometry, Pythagorean theorem
 */

const [W, H] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n')[0]
    .split(' ')
    .map(Number);

const diagonal = Math.sqrt(Math.pow(W, 2) + Math.pow(H, 2)); // 대각선으로 자르기
const rect = W + H; // 가로 자르고 세로 자르고

console.log(Math.abs(rect - diagonal));
