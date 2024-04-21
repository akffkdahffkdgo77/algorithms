/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : CLASS I (Bronze II)
 *  Problem : 2577
 *  Algorithm : 수학, 구현, 사칙연산
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .split('\n');
const multiple = +input[0] * +input[1] * +input[2];

const obj = String(multiple)
    .split('')
    .reduce((prev, cur) => ({ ...prev, [cur]: prev[cur] ? prev[cur] + 1 : 1 }), {});

let answer = '';
Array.from({ length: 10 }).forEach((_, i) => (answer += `${obj[i] || 0}\n`));
console.log(answer);
