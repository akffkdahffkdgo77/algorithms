/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: CLASS 1
 *  Problem : 3052
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .split('\n');

const NUM = 42;
const answer = input
    .map((v) => +v % NUM)
    .reduce((prev, cur, i) => {
        if (i < 10) {
            return { ...prev, [cur]: prev[cur] ? prev[cur] + 1 : 1 };
        }
        return prev;
    }, {});

console.log(Object.values(answer).length);
