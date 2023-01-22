/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 16204
 *  Algorithm : Math, Implementation, Arithmetic Operations
 */

const [N, M, K] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n')[0]
    .split(' ')
    .map(Number);

const frontO = M;
const frontX = N - M;

const backO = K;
const backX = N - K;

const frontOverlap = frontO > backO ? backO : frontO;
const backOverlap = frontX > backX ? backX : frontX;

console.log(frontOverlap + backOverlap);
