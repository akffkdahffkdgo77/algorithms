/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: Bronze V
 *  Problem : 25372
 */

const [N, ...input] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n');

let answer = '';
input.forEach((value, i) => {
    if (i < Number(N)) {
        answer += value.length >= 6 && value.length <= 9 ? 'yes \n' : 'no \n';
    }
});

console.log(answer.trim());
