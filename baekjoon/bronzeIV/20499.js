/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 20499
 *  Algorithm : Math, Arithmetic Operations
 */

const [K, D, A] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n')[0]
    .split('/')
    .map(Number);

const isHasu = K + A < D || !D;
console.log(isHasu ? 'hasu' : 'gosu');
