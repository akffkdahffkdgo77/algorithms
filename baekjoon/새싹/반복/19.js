/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: 새싹
 *  Type : 반복
 *  Problem : 10872
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .split('\n')[0];

let answer = 1;
for (let i = Number(input); i > 0; i--) {
    answer *= i;
}

console.log(answer);
