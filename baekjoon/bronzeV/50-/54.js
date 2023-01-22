/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: Bronze V
 *  Problem : 23235
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n');

let answer = '';
input.forEach((value, i) => {
    const numList = value.split(' ').map(Number);
    if (numList[0]) {
        answer += `Case ${i + 1}: Sorting... done! \n`;
    }
});
console.log(answer.trim());
