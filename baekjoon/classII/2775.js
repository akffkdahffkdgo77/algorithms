/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : CLASS II (Bronze I)
 *  Problem : 2775
 *  Algorithm : 수학, 구현, 다이나믹 프로그래밍
 */

const [n, ...input] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(Number);

const arr = [Array.from({ length: 14 }).map((_, i) => i + 1)];

// 모든 방(14 * 14) 에 있는 사람들 수 계산
for (let i = 0; i < 14; i++) {
    const people = [];
    for (let j = 0; j < 14; j++) {
        let sum = 0;
        for (let k = 0; k <= j; k++) {
            sum += arr[i][k];
        }
        people.push(sum);
    }
    arr.push(people);
}

// k-1층 1호 ~ n호까지 사람들의 수의 합 구하기
let answer = '';
for (let i = 0; i < input.length; i += 2) {
    const [k, n] = input.slice(i, i + 2);
    let people = 0;
    for (let j = 1; j <= n; j++) {
        people += arr[k - 1][j - 1];
    }
    answer += `${people}\n`;
}

console.log(answer.trim());
