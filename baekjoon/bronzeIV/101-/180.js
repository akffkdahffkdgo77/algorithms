/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 25932
 *  Algorithm : Implementation
 */

const [N, ...input] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim()
    .split('\n');

let answer = '';
for (let i = 0; i < N; i++) {
    answer += `${input[i]}\n`;

    const arr = input[i].split(' ').map(Number);
    const zack = arr.findIndex((val) => val === 17) !== -1;
    const mack = arr.findIndex((val) => val === 18) !== -1;

    answer += `${zack && mack ? 'both' : zack ? 'zack' : mack ? 'mack' : 'none'}\n\n`;
}

console.log(answer.trim());
