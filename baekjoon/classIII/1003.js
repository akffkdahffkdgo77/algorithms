/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : CLASS III (Silver III)
 *  Problem : 1003
 *  Algorithm : 다이나믹 프로그래밍
 */

const [N, ...input] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .split('\n')
    .map(Number);

// f(0) = [1, 0]
// f(1) = [0, 1]
// f(2) = [f1+f0, f1+f0]
// f(3) = [f2+f1, f2+f1]
// f(4) = [f3+f2, f3+f2]

// f(n) = f(n-1) + f(n-2)
// 현재 값을 구하려면 이전 값들을 합하면 됨
// 따라서 이전 값들을 저장시켜주면서 값을 찾으면 된다.
const DP = [
    [1, 0], // f(0)일때 0과 1 개수
    [0, 1] // f(1)일 때 0과 1 개수
];

for (let i = 0; i < N; i++) {
    for (let j = 2; j <= input[i]; j++) {
        // f(n) = f(n-2) + f(n-1)
        DP[j] = [DP[j - 2][0] + DP[j - 1][0], DP[j - 2][1] + DP[j - 1][1]];
    }
    console.log(DP[input[i]].join(' '));
}
