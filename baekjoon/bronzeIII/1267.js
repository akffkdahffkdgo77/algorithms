/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : Bronze III
 *  Problem : 1267
 *  Algorithm : Math, Arithmetic Operations
 */

const [N, input] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n');

const list = input.split(' ').map(Number);

let Y = 0;
let M = 0;

for (let i = 0; i < Number(N); i++) {
    Y += Math.ceil((list[i] + 1) / 30) * 10;
    M += Math.ceil((list[i] + 1) / 60) * 15;
}

if (Y > M) {
    console.log('M', M);
} else if (Y === M) {
    console.log('Y M', Y);
} else {
    console.log('Y', Y);
}
