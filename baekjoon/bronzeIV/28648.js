/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 28648
 *  Algorithm : Math, Implementation, Arithmetic Operations
 */

const [N, ...input] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim()
    .split('\n');

let sum = Number.MAX_SAFE_INTEGER;
for (let i = 0; i < input.length; i++) {
    const [t, l] = input[i].split(' ').map(Number);
    sum = Math.min(sum, t + l);
}
console.log(sum);
