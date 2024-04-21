/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : 새싹
 *  Type : 반복
 *  Problem : 2741
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .split('\n')[0];

let answer = '';
for (let i = 1; i <= Number(input); i++) {
    answer += `${i} \n`;
}

console.log(answer);
