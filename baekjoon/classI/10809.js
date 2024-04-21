/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : CLASS I (Bronze II)
 *  Problem : 10809
 *  Algorithm : 구현, 문자열
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .split('\n')[0]
    .split('');

let answer = '';
Array.from({ length: 26 }).forEach(
    (_, i) => (answer += `${input.findIndex((val) => val === String.fromCharCode(i + 97))} `)
);

console.log(answer);
