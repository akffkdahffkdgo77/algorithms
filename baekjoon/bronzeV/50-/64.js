/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: Bronze V
 *  Problem : 25304
 */

const [X, N, ...input] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n');

let count = 0;
input.forEach((value, i) => {
    const [A, B] = value.split(' ').map(Number);
    if (i < N) {
        count += A * B;
    }
});

console.log(count === Number(X) ? 'Yes' : 'No');
