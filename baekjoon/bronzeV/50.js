/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: Bronze V
 *  Problem : 21300
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n')[0]
    .split(' ')
    .map(Number);

console.log(input.reduce((prev, cur) => (prev += cur * 5), 0));
