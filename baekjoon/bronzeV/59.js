/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: Bronze V
 *  Problem : 24309
 */

// 시간 복잡도
const [A, B, C] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(BigInt);

console.log(((B - C) / A).toString());
