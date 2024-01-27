/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: Bronze V
 *  Problem : 30007
 *  Algorithm: Math, Implementation, Arithmetic Operations
 */

const [N, ...input] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim()
    .split('\n');

for (let i = 0; i < input.length; i++) {
    const [A, B, X] = input[i].split(' ').map(Number);
    console.log(A * (X - 1) + B);
}
