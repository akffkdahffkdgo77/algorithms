/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : Bronze V
 *  Problem : 7891
 */

const [T, ...input] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n');

let answer = '';
input.forEach((val, index) => {
    const [A, B] = val.split(' ').map(Number);
    if (index < T) {
        answer += `${A + B}\n`;
    }
});
console.log(answer.trim());
