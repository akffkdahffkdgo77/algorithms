/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : Bronze IV
 *  Problem : 6888
 */

const [X, Y] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(Number);

const multiple = 4 * 3 * 5;

let answer = '';
let year = X;
while (year <= Y) {
    answer += `All positions change in year ${year}\n`;
    year += multiple;
}

console.log(answer.trim());
