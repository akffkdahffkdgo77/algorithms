/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : CLASS III (Silver IV)
 *  Problem : 11399
 *  Algorithm : 그리디 알고리즘, 정렬
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n');
input.shift();

let waitingTime = 0;
const answer = input[0]
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b)
    .reduce((prev, cur) => {
        const sum = prev + cur + waitingTime;
        waitingTime += cur;
        return sum;
    }, 0);

console.log(answer);
