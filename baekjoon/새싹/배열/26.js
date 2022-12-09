/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: 새싹
 *  Type : 배열
 *  Problem : 10871
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .split('\n');

let [_, X] = input[0].split(' ');
const numList = input[1].split(' ');

let answer = '';
for (let i = 0; i < numList.length; i++) {
    const num = numList[i];
    answer += +X > num ? `${num} ` : '';
}

console.log(answer);
