/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : CLASS III (Silver III)
 *  Problem : 11659
 *  Algorithm : 누적 합
 */

const [first, second, ...input] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n');

const list = second.split(' ').map(Number);
// 누적합 담아두기
const sum = [0];
for (let i = 0; i < list.length; i++) {
    sum[i + 1] = sum[i] + list[i];
}

const answer = [];
for (let i = 0; i < input.length; i++) {
    const [x, y] = input[i].split(' ').map(Number);
    // 구간 합 구하기
    answer.push(sum[y] - sum[x - 1]);
}

console.log(answer.join('\n').trim());
