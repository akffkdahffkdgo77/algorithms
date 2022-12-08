/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: 새싹
 *  Type : 반복
 *  Problem : 10952
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .split('\n');

let answer = '';
for (let i = 0; i < input.length; i++) {
    const [num1, num2] = input[i].split(' ');
    answer += +num1 && +num2 ? `${+num1 + +num2} \n` : '';
}

console.log(answer);
