/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : CLASS III (Silver III)
 *  Problem : 1463
 *  Algorithm : 다이나믹 프로그래밍
 */

const N = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim();

const num = Number(N);
const list = [0, 0, 1, 1]; // x=0, x=1, x=2, x=3

// 1을 구하는 최솟값
// list[1] = 1
// list[2] = list[1] + 1
// list[3] = list[2] + 1 또는 list[3/3] + 1

for (let i = 4; i <= num; i++) {
    // -1 하기
    list[i] = list[i - 1] + 1;

    // 3으로 나누어지는 경우
    if (i % 3 === 0) {
        list[i] = Math.min(list[i], list[i / 3] + 1);
    }

    // 2로 나누어지는 경우
    if (i % 2 === 0) {
        list[i] = Math.min(list[i], list[i / 2] + 1);
    }
}

console.log(list[num]);
