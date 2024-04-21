/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : Bronze V
 *  Problem : 3733
 */

// 10^1000 -> BigInt
const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .split('\n');

let answer = '';
input.forEach((value) => {
    if (value) {
        const parsed = value.split(' ');
        const N = BigInt(Number(parsed[0]) + 1);
        const S = BigInt(parsed[1]);

        answer += `${S / N} \n`;
    }
});

console.log(answer.trim());
