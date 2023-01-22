/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 21354
 *  Algorithm : Math, Implementation, Arithmetic Operations
 */

const [A, P] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim()
    .split('\n')[0]
    .split(' ')
    .map(Number);

console.log(A * 7 === P * 13 ? 'lika' : A * 7 > P * 13 ? 'Axel' : 'Petra');
