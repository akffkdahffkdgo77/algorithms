/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: Bronze II
 *  Problem : 2745
 *  Algorithm: Math, Number Theory, Prime Number
 */

const [N, B] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split(' ');

// 진법 변환
console.log(parseInt(N, B));
