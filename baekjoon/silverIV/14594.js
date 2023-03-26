/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Silver IV
 *  Problem : 14594
 *  Algorithm : 구현, 시뮬레이션
 */

const [N, M, ...input] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n');

const arr = Array.from({ length: N }).fill(true);

for (let i = 0; i < M; i++) {
    const [x, y] = input[i].split(' ').map(Number);
    for (let j = x; j < y; j++) {
        arr[j] = false;
    }
}

console.log(arr.filter((val) => val).length);
