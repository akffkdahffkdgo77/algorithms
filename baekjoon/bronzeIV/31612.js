/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 31612
 *  Algorithm : Math, String, Arithmetic Operations
 */

const [N, S] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n');

const obj = {
    j: 2,
    o: 1,
    i: 2
};

console.log(S.split('').reduce((prev, acc) => prev + obj[acc], 0));
