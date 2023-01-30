/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: CLASS 2
 *  Problem : 2798
 *  Algorithm : Brute Force Algorithm
 */

const [first, second] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n');

const M = first.split(' ').map(Number)[1];
const input = second.split(' ').map(Number);

/** 예시
 *  input length: 5
 *  5 6 7 -> i: 0, j: 0+1, k: 1+1
 *  5 6 8 -> i: 0, j: 1, k: 3
 *  5 6 9 -> i: 0, j: 1, k: 4
 *  5 7 8 -> i: 0, j: 2, k: 2+1
 *  5 7 9 -> i: 0, j: 2, k: 4
 *  5 8 9 -> i: 0, j: 3, k: 3+1
 *  6 7 8 -> i: 1, j: 1+1, k: 2+1
 *  6 7 9 -> i: 1, j: 2, k: 4
 *  6 8 9 -> i: 1, j: 3, k: 3+1
 *  7 8 9 -> i: 2, j: 3, k: 3+1
 */

let answer = 0;
for (let i = 0; i < input.length; i++) {
    // j는 i 이후의 값 (i 중복 x)
    for (let j = i + 1; j < input.length; j++) {
        // k는 j 이후의 값 (i, j 중복 x)
        for (let k = j + 1; k < input.length; k++) {
            const sum = input[i] + input[j] + input[k];
            // 3 카드의 합이 M보다 작거나 같다면
            if (sum <= M) {
                // 합 중 가장 M에 가까운 값
                answer = Math.max(answer, sum);
            }
        }
    }
}

console.log(answer);
