/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: Bronze I
 *  Problem : 1037
 *  Algorithm: Math, Number Theory
 */

const [num, list] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n');

if (num === 1) {
    console.log(Number(list[0]) * Number(list[0]));
} else {
    const divisor = list.split(' ').sort((a, b) => Number(a) - Number(b));
    const first = Number(divisor[0]);
    const last = Number(divisor.pop());
    console.log(first * last);
}
