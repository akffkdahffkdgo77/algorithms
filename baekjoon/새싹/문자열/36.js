/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: 새싹
 *  Type : 문자열
 *  Problem : 9086
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .split('\n');
const [N, ...rest] = input;

let answer = '';
rest.forEach((val, i) => {
    if (i < +N) {
        answer += `${val.slice(0, 1)}${val.slice(val.length - 1)} \n`;
    }
});
console.log(answer);
