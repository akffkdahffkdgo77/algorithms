/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : Bronze IV
 *  Problem : 10188
 */

const [N, ...input] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n');

const X = 'X';
let answer = '';
input.forEach((val, index) => {
    if (index < N) {
        const [W, H] = val.split(' ').map(Number);
        Array.from({ length: H }).forEach(() => (answer += `${X.repeat(W)}\n`));
        answer += '\n';
    }
});

console.log(answer.trim());
