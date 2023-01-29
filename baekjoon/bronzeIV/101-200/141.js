/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 21591
 *  Algorithm : Math, Implementation, Arithmetic Operations
 */

const [Wc, Hc, Ws, Hs] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim()
    .split('\n')[0]
    .split(' ')
    .map(Number);

const width = Wc - Ws;
const height = Hc - Hs;

console.log(width >= 2 && height >= 2 ? 1 : 0);
