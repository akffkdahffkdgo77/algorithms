/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : Bronze III
 *  Problem : 2443
 *  Algorithm : Implementation
 */

const N = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim();

const total = 2 * Number(N) - 1;

for (let i = N; i > 0; i--) {
    const minusValue = 2 * (N - i + 1) - 1;
    const num = 2 * N - minusValue;
    console.log(
        '*'
            .repeat(num)
            .padStart((total + num) / 2, ' ')
            .padEnd((total + num) / 2, ' ')
    );
}
