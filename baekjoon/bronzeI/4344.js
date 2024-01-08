/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: Bronze I
 *  Problem : 4344
 *  Algorithm: Math, Arithmetic Operations
 */

const [C, ...list] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n');

for (let i = 0; i < list.length; i++) {
    const [N, ...score] = list[i].split(' ').map(Number);
    const sum = score.reduce((acc, val) => acc + val, 0);
    const average = sum / N;
    let overAverage = 0;
    for (let j = 0; j < score.length; j++) {
        if (score[j] > average) {
            overAverage++;
        }
    }
    console.log(`${((overAverage / N) * 100).toFixed(3)}%`);
}
