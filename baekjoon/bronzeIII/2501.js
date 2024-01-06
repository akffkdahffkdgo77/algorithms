/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : Bronze III
 *  Problem : 2501
 *  Algorithm : Math, Brute Force
 */

const [N, K] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split(' ')
    .map(Number);

let count = 0;
let answer = 0;
for (let i = 0; i <= N; i++) {
    if (N % i === 0) {
        if (++count === K) {
            answer = i;
        }
    }
}
console.log(answer);
