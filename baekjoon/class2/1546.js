/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : CLASS II (Bronze V)
 *  Problem : 1546
 *  Algorithm : 수학, 사칙연산
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .split('\n');

const N = Number(input[0]);
const max = Math.max(...input[1].split(' '));

const answer = input[1].split(' ').reduce((prev, cur, i) => {
    if (i < N) {
        prev += +cur;
    }
    return prev;
}, 0);

console.log(((answer / N) * 100) / max);
