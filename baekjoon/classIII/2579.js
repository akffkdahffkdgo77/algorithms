/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : CLASS III (Silver III)
 *  Problem : 2579
 *  Algorithm : 다이나믹 프로그래밍
 */

const [N, ...input] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n');

const num = Number(N);
const list = input.map(Number);

// 계단이 1개 -> 10
// 계단이 2개 -> 10 + 20 또는 20 (한 칸 x 두 번째 칸)
// 계단이 3개 (연속 3개는 못 밞음) 10 + 20 또는 20 + 15
const dp = [list[0], Math.max(list[0] + list[1], list[1]), Math.max(list[0] + list[2], list[1] + list[2])];
for (let i = 3; i < num; i++) {
    // 계단이 4개 이상...
    // i = 4
    // 25 + 30 (max)
    // 25 + 15 + 10

    // i = 5
    // 10 + 35
    // 10 + 25 + 30 (max)
    dp[i] = Math.max(list[i] + dp[i - 2], list[i] + list[i - 1] + dp[i - 3]);
}

console.log(dp[num - 1]);
