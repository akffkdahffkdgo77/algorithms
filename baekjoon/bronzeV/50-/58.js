/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : Bronze V
 *  Problem : 24262
 */

// 시간 복잡도
const N = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(Number)[0];

if (N === N) {
    console.log(N / N);
    console.log(0);
} else if (N === Math.pow(N, 2)) {
    console.log(parseInt(N / Math.pow(N, 2)));
    console.log(1);
} else if (N === Math.pow(N, 3)) {
    console.log(parseInt(N / Math.pow(N, 3)));
    console.log(2);
} else {
    console.log(4);
}
