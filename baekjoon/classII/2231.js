/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : CLASS II (Bronze II)
 *  Problem : 2231
 *  Algorithm : 브루트포스 알고리즘
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .split('\n')[0];

let answer = 0;
for (let num = 0; num < Number(input); num++) {
    const sum = [...String(num)].reduce((prev, cur) => (prev += Number(cur)), 0);
    if (num + sum === Number(input)) {
        answer = num;
        break;
    }
}

console.log(answer);
