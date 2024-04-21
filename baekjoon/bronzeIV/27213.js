/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 27213
 *  Algorithm : Math, Arithmetic Operations
 */

const [m, n] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(Number);

// 3부터 중간에 빈 칸이 생김
if (m >= 3 && n >= 3) {
    console.log(m * n - (m - 2) * (n - 2));
} else {
    console.log(m * n);
}
