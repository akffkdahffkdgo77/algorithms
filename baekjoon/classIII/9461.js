/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : CLASS III (Silver III)
 *  Problem : 9461
 *  Algorithm : 수학, 다이나믹 프로그래밍
 */

const [N, ...input] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(Number);

const dp = [1, 1, 1];
const max = Math.max(...input);

// 1+1 (1) -> 2
// 1+1 (2) -> 2
// 2+2 (3) -> 4
// 2+3 (4) -> 5
for (let j = 3; j < max; j++) {
    dp[j] = dp[j - 3] + dp[j - 2];
}

for (let i = 0; i < input.length; i++) {
    console.log(dp[input[i] - 1]);
}
