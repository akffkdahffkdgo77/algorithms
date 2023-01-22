/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: Bronze IV
 *  Problem : 15059
 */

const [first, second] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n');

const [Ca, Ba, Pa] = first.split(' ').map(Number);
const [Cr, Br, Pr] = second.split(' ').map(Number);

const A = Ca - Cr;
const B = Ba - Br;
const C = Pa - Pr;

let answer = 0;
if (A < 0) {
    answer += -A;
}

if (B < 0) {
    answer += -B;
}

if (C < 0) {
    answer += -C;
}

console.log(answer);
