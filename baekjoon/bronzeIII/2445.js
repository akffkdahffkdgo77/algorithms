/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : Bronze III
 *  Problem : 2445
 *  Algorithm : Implementation
 */

const N = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim();

const num = Number(N);
const total = 2 * num;

for (let i = 1; i < num; i++) {
    const star = '*'.repeat(i);
    console.log(star.padEnd(total - star.length, ' ') + star);
}

for (let i = num; i > 0; i--) {
    const star = '*'.repeat(i);
    console.log(star.padEnd(total - star.length, ' ') + star);
}
