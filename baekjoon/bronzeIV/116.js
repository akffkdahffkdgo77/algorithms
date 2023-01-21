/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 18398
 *  Algorithm : Math, Implementation, Arithmetic Operations
 */

const [N, ...input] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n');

let total = N;
let tc = 0;
let arr = [];
let answer = '';
while (total) {
    tc = input.shift();
    for (let i = 0; i < tc; i++) {
        arr.push(input.shift());
    }

    answer += arr.reduce((prev, cur) => {
        const [a, b] = cur.split(' ').map(Number);
        return `${prev}${a + b} ${a * b}\n`;
    }, '');

    total--;
    arr = [];
}

console.log(answer.trim());
