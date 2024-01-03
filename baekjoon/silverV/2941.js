/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Silver V
 *  Problem : 2941
 *  Algorithm : 수학, 다이나믹 프로그래밍, 그리디 알고리즘
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim();
const N = Number(input);

// 거스름돈 : 13
// 13 > 5
// 13 % 5 !== 0
// count = 2, remainder = 3
// 3 % 2 !== 0
// count = 1, remainder 3 + 5
// count + remainder / 2
// --> 1 + 4

// 만약 5보다 작으면 2로만 거스름돈을 줘야 한다
if (N < 5) {
    if (N % 2 !== 0) {
        console.log(-1);
    } else {
        console.log(N / 2);
    }
} else {
    let count = Math.floor(N / 5); // 동전 개수
    let remainder = N % 5; // 나머지

    // 만약 나머지가 없다면 -> 동전 개수 출력
    if (remainder === 0) {
        console.log(count);
    } else if (remainder % 2 === 0) {
        // 나머지를 2로 나눌 수 있다면 -> 동전 개수 계산해서 출력
        console.log(count + remainder / 2);
    } else {
        // 나머지에서 5를 더해주고 count에서 1을 빼기
        remainder += 5;
        count -= 1;
        // 2로 나누고 동전 개수 더하고 출력
        count += Math.floor(remainder / 2);
        console.log(count);
    }
}
