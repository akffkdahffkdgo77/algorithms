/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : CLASS I (Bronze III)
 *  Problem : 10250
 *  Algorithm : 수학, 구현, 사칙연산
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .split('\n');
const [N, ...rest] = input;

let answer = '';
rest.forEach((row, i) => {
    if (i < N) {
        const [h, _, n] = row.split(' ');
        const num = Math.ceil(n / h);
        const height = n - Math.floor(n / h) * h;
        answer += `${height === 0 ? h : height}${num < 10 ? '0' + num : num} \n`;
    }
});
console.log(answer.slice(0, -1));
