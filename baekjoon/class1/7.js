/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: CLASS 1
 *  Problem : 1546
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
