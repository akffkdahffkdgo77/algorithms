/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : Bronze III
 *  Problem : 2522
 *  Algorithm : Implementation
 */

const N = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim();

const total = 2 * Number(N) - 1;

for (let i = 1; i <= N; i++) {
    console.log('*'.repeat(i).padStart(N, ' '));
}

for (let i = total; i > N; i--) {
    console.log('*'.repeat(i - N).padStart(N, ' '));
}
