/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : Bronze IV
 *  Problem : 11365
 */

const word = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n');

let answer = '';
word.forEach((val) => {
    if (val !== 'END') {
        answer += `${val.split('').reverse().join('')}\n`;
    }
});

console.log(answer);
