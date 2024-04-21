/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : CLASS I (Bronze IV)
 *  Problem : 11720
 *  Algorithm : 수학, 구현, 문자열
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .split('\n');

let answer = 0;
input[1].split('').forEach((v) => (answer += +v));
console.log(answer);
