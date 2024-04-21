/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : Bronze IV
 *  Problem : 8760
 */

const [N, ...input] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n');

let answer = '';
input.forEach((val, index) => {
    if (index < N) {
        const [W, H] = val.split(' ').map(Number);
        answer += `${Math.floor((W * H) / 2)}\n`;
    }
});

console.log(answer.trim());
