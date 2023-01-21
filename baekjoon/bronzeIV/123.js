/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 19698
 *  Algorithm : Math, Arithmetic Operations
 */

const [N, W, H, L] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n')[0]
    .split(' ')
    .map(Number);

// W에 L이 얼마나 들어가는지
// H에 L이 얼마나 들어가는지
const total = Math.floor(W / L) * Math.floor(H / L);
console.log(Math.min(total, N));
