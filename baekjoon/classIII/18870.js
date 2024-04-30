/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : CLASS III (Silver II)
 *  Problem : 18870
 *  Algorithm : 정렬, 값 / 좌표 압축
 */

const [first, second] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n');

// 좌표값이 전체 좌표값들 중 몇 번째로 큰 좌표인지
// xi > xj
// 2는 [4, -10 ,4, -9]에서 -10, -9보다 큰 수
// 4는 [2, -10, 4, -9]에서 2, -10, -9보다 큰 수
// -10은 [2, 4, 4, -9]에서 가장 작은 수
// -9는 [2, 4, -10, 4]에서 2,4 보다 작은 수
// 4 > 2 > -9 > -10
// 4는 중복된 값
// 2 4 -10 4 -9
// -> 2 3 0 3 1 (min -> max)
const list = second.split(' ').map(Number);
const arr = [...new Set(list)].sort((a, b) => a - b);
const obj = {};
arr.forEach((value, index) => (obj[value] = index));

const answer = [];
for (let i = 0; i < list.length; i++) {
    answer.push(obj[list[i]]);
}
console.log(answer.join(' '));
