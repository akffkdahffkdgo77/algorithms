/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : Bronze III
 *  Problem : 2720
 *  Algorithm : Math, Greedy, Arithmetic Operations
 */

const [T, ...input] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(Number);

const list = [25, 10, 5, 1];

const answer = [];
for (let i = 0; i < input.length; i++) {
    let total = input[i];
    const row = [0, 0, 0, 0];
    for (let j = 0; j < list.length; j++) {
        if (total >= list[j]) {
            row[j] = Math.floor(total / list[j]);
            total -= row[j] * list[j];
        }
    }
    answer.push(row.join(' '));
}
console.log(answer.join('\n'));
