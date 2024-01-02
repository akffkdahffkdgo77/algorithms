/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : Bronze III
 *  Problem : 2523
 *  Algorithm : Implementation
 */

const N = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim();

const num = Number(N);
for (let i = 1; i <= num; i++) {
    console.log('*'.repeat(i));
}

for (let i = num - 1; i > 0; i--) {
    console.log('*'.repeat(i));
}
