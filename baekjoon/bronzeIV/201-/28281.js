/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 28281
 *  Algorithm : Math, Implementation, Arithmetic Operations
 */

const [NX, input] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim()
    .split('\n');

const [N, X] = NX.split(' ').map(Number);
const price = input.split(' ').map(Number);

let least = price[0] * X + price[1] * X;
for (let i = 0; i < price.length - 1; i++) {
    const first = price[i] * X;
    const second = price[i + 1] * X;
    least = Math.min(first + second, least);
}

console.log(least);
