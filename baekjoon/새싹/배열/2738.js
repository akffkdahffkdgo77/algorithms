/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : 새싹
 *  Type : 배열
 *  Problem : 2738
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .split('\n');

const N = Number(input[0].split(' ')[0]);
const first = input.slice(1, N + 1);
const second = input.slice(N + 1);

let answer = '';
for (let i = 0; i < N; i++) {
    first[i].split(' ').forEach((v, j) => {
        answer += `${+v + +second[i].split(' ')[j]} `;
    });
    answer += '\n';
}

console.log(answer);
