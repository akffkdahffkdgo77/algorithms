/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: 새싹
 *  Type : 배열
 *  Problem : 5597
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .split('\n')
    .sort((a, b) => a - b);

let answer = '';
const arr = Array.from({ length: 30 }).map((_, i) => i + 1);
arr.forEach((value) => {
    if (input.findIndex((v) => +v === value) === -1) {
        answer += `${value} \n`;
    }
});

console.log(answer);
