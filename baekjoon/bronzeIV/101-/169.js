/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 25377
 *  Algorithm : Implementation
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim()
    .split('\n');
input.shift();

let answer = Number.MAX_SAFE_INTEGER;
for (let i = 0; i < input.length; i++) {
    const [A, B] = input[i].split(' ').map(Number);
    if (A <= B) {
        answer = Math.min(answer, B);
    }
}

console.log(answer === Number.MAX_SAFE_INTEGER ? -1 : answer);
