/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 26068
 *  Algorithm : Implementation, String, Parsing
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim()
    .split('\n');
input.shift();

let answer = 0;
input.forEach((val) => {
    if (Number(val.replace('D-', '')) <= 90) {
        answer++;
    }
});

console.log(answer);
