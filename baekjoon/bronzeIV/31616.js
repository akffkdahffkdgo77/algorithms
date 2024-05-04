/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : Bronze IV
 *  Problem : 31616
 */

const [N, S] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n');

console.log(new Set(S.split('')).size > 1 ? 'No' : 'Yes');
