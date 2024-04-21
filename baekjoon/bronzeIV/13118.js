/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : Bronze IV
 *  Problem : 13118
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n');

const [X] = input[1].split(' ').map(Number);

let answer = '';
input[0]
    .split(' ')
    .map(Number)
    .forEach((val, index) => {
        if (val === X) {
            answer = index + 1;
        }
    });

console.log(answer || 0);
