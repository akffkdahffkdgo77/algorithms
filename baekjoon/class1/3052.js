/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : CLASS I (Bronze II)
 *  Problem : 3052
 *  Algorithm : 수학, 사칙연산
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
