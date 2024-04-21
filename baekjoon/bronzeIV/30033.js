/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 30033
 *  Algorithm : Implementation
 */

const [N, ...input] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim()
    .split('\n');

let count = 0;
const A = input[0].split(' ').map(Number);
const B = input[1].split(' ').map(Number);
for (let i = 0; i < Number(N); i++) {
    if (A[i] <= B[i]) {
        count++;
    }
}

console.log(count);
