/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : CLASS I (Bronze III)
 *  Problem : 2884
 *  Algorithm : 수한, 사칙연산
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .split('\n')[0];
const ONE_HOUR = 60;

let hour = Number(input.split(' ')[0]);
let min = Number(input.split(' ')[1]);

if (min < 45) {
    min += ONE_HOUR - 45;
    hour = hour === 0 ? 23 : hour - 1;
} else {
    min -= 45;
}

console.log(hour, min);
