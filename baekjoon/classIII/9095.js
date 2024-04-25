/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : CLASS III (Silver III)
 *  Problem : 9095
 *  Algorithm : 다이나믹 프로그래밍
 */

const [N, ...input] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(Number);

const dp = [0, 1, 2, 4, 7]; // 0, 1, 2, 3, 4

// i=1 -> 1
// i=2 -> 1+1 | 2 (2)
// i=3 -> 1+2 | 1+1+1, 2+1 | 3 (4)
// i=4 -> 1+3 | 1+1+2, 2+2 | 1+1+1+1, 1+2+1, 2+1+1, 3+1 (7)

for (let i = 5; i < 11; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
}

for (let i = 0; i < input.length; i++) {
    console.log(dp[input[i]]);
}
