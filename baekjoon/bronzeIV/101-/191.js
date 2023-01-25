/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 26532
 *  Algorithm : Math, Arithmetic Operations
 */

const [w, h] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim()
    .split(' ')
    .map(Number);

const acre = Math.ceil((w * h) / 4840);
console.log(Math.ceil(acre / 5));
