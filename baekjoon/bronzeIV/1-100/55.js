/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: Bronze IV
 *  Problem : 11257
 */

const [N, ...input] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n');

let answer = '';

input.forEach((val, index) => {
    if (index < N) {
        const [ID, A, B, C] = val.split(' ').map(Number);
        const isOverTotal = A + B + C >= 55;
        const isOverThirty = A >= 35 * 0.3 && B >= 25 * 0.3 && C >= 40 * 0.3;
        answer += `${ID} ${A + B + C} ${isOverTotal && isOverThirty ? 'PASS' : 'FAIL'}\n`;
    }
});

console.log(answer.trim());
