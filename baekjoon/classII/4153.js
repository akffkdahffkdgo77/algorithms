/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : CLASS II (Bronze III)
 *  Problem : 4153
 *  Algorithm : 수학, 기하학, 피타고라스 정리
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .split('\n');

let answer = '';
input.forEach((row) => {
    const [a, b, c] = row.split(' ').sort((a, b) => a - b);
    if (+a && +b && +c) {
        answer += Math.pow(+a, 2) + Math.pow(+b, 2) === Math.pow(+c, 2) ? `right \n` : `wrong \n`;
    }
});
console.log(answer);
