/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 15128
 *  Algorithm : Math, Arithmetic Operations
 */

const [p1, q1, p2, q2] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n')[0]
    .split(' ')
    .map(Number);

const area = (p1 * p2 * 1) / (q1 * q2 * 2);
console.log(area !== parseInt(area, 10) ? 0 : 1);
