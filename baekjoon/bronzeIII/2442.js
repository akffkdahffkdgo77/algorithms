/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : Bronze III
 *  Problem : 2442
 *  Algorithm : Implementation
 */

const N = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim();

const total = 2 * Number(N) - 1;

for (let i = 1; i <= N; i++) {
    const num = 2 * i - 1;
    console.log(
        '*'
            .repeat(num)
            .padStart((total + num) / 2, ' ')
            .padEnd((total + num) / 2, ' ')
    );
}
