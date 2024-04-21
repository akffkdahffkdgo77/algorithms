/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : Bronze V
 *  Problem : 2338
 */

// 10^1000 -> BigInt
const [A, B] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .split('\n')
    .map(BigInt);

console.log(`${A + B}`);
console.log(`${A - B}`);
console.log(`${A * B}`);
