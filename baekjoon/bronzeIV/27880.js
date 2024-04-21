/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 27880
 *  Algorithm : Math, Implementation, String, Arithmetic Operations
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim()
    .split('\n');

let sum = 0;
for (let i = 0; i < input.length; i++) {
    const [T, N] = input[i].split(' ');
    sum += T === 'Es' ? Number(N) * 21 : Number(N) * 17;
}

console.log(sum);
