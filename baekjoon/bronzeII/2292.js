/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: Bronze II
 *  Problem : 2292
 *  Algorithm: Math
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim();

const num = Number(input);

// count = 1 -> 1
// count = 2 -> 6 (2 - 7번 방)
// count = 3 -> 12 (8 - 19번 방)
// count = 4 -> 18 (20 - 27번 방)
if (num === 1) {
    console.log(1);
} else {
    let count = 1; // 최소 개수의 방 카운트
    let roomNum = 2; // 2번째 방부터 카운트
    while (roomNum <= num) {
        roomNum += 6 * count;
        count++;
    }
    console.log(count);
}
