/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 18408
 *  Algorithm : Implementation
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n')[0]
    .split(' ')
    .map(Number);

const obj = input.reduce((prev, cur) => ({ ...prev, [cur]: prev[cur] ? prev[cur] + 1 : 1 }), {});
const answer = Object.keys(obj).filter((key) => obj[key] > 1)[0];

console.log(answer ? answer : input[0]);
