/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : Bronze III
 *  Problem : 2566
 *  Algorithm : Implementation
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n');

let [x, y] = [1, 1];

let max = 0;
for (let i = 0; i < input.length; i++) {
    const row = input[i].split(' ').map(Number);
    for (let j = 0; j < row.length; j++) {
        if (max !== Math.max(row[j], max)) {
            console.log(max, j, i);
            max = Math.max(row[j], max);
            x = j + 1;
            y = i + 1;
        }
    }
}

console.log(max, y, x);
