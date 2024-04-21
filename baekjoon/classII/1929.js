/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : CLASS II (Silver III)
 *  Problem : 1929
 *  Algorithm : 수학, 정수론, 소수 판정, 에라토스테네스의 체
 */

// 에라토스테네스의 체
const [M, N] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .split('\n')[0]
    .split(' ')
    .map(Number);

const list = Array.from({ length: N + 1 }).map((_, i) => (i === 0 || i === 1 ? false : true));

// 1은 소수가 아님
// 2, 3, 5, 7을 제외한 2, 3, 5, 7의 배수 제외
// list[i]가 소수 -> i의 배수는 소수가 아님
for (let i = 2; i <= N; i++) {
    // list[i] = 2
    if (list[i]) {
        // j = 4 (2 * 2)
        for (let j = Math.pow(i, 2); j <= N; j += i) {
            // j (j + i)
            // -> 4 (2 * 2) = 시작
            // -> 6 (4 + 2)
            // -> 8 (8 + 2)
            // -> 10 (10 + 2)
            // -> 12 (12 + 2)
            // -> 14 (14 + 2)
            // ...
            list[j] = false;
        }
    }
}

for (let i = M; i <= N; i++) {
    if (list[i]) console.log(i);
}
