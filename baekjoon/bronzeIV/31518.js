/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 31518
 *  Algorithm : Implementation
 */

const [N, ...input] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim()
    .split('\n');

const answer = [];
for (let i = 0; i < input.length; i++) {
    const list = input[i].split(' ').map(Number);
    for (let j = 0; j < Number(N); j++) {
        if (list[j] === 7) {
            answer.push(7);
        }
    }
}
console.log(answer.length === 3 ? 777 : 0);
