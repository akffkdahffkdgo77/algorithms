/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 30008
 *  Algorithm : Math, Implementation, Arithmetic Operations
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim()
    .split('\n');

const [N, K] = input[0].split(' ').map(Number);
const list = input[1].split(' ').map(Number);

const answer = [];
for (let i = 0; i < list.length; i++) {
    const P = Math.floor((list[i] * 100) / N);
    if (P <= 4) {
        answer.push(1);
    } else if (P <= 11) {
        answer.push(2);
    } else if (P <= 23) {
        answer.push(3);
    } else if (P <= 40) {
        answer.push(4);
    } else if (P <= 60) {
        answer.push(5);
    } else if (P <= 77) {
        answer.push(6);
    } else if (P <= 89) {
        answer.push(7);
    } else if (P <= 96) {
        answer.push(8);
    } else if (P <= 100) {
        answer.push(9);
    }
}
console.log(answer.join(' '));
