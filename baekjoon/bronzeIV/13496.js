/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : Bronze IV
 *  Problem : 13496
 */

const [N, ...input] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n');

let length = 0;
let answer = '';
for (let i = 0; i < Number(N); i++) {
    const curIndex = i + length;
    const [n, s, day] = input[curIndex].split(' ').map(Number);
    answer += `Data Set ${i + 1}:\n`;

    let total = 0;
    Array.from({ length: n }).forEach((_, index) => {
        if (input[curIndex + index + 1]) {
            const [d, v] = input[curIndex + index + 1]?.split(' ').map(Number);
            if (d / s <= day) {
                total += v;
            }
        }
    });
    length += n;
    answer += `${total}\n\n`;
}

console.log(answer.trim());
