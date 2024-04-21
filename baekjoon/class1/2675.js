/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : CLASS I (Bronze II)
 *  Problem : 2675
 *  Algorithm : 구현, 문자열
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .split('\n');

let answer = '';
input.forEach((value) => {
    const [count, str] = value.split(' ');
    if (count && str) {
        str.split('').forEach((v) => Array.from({ length: count }).forEach((_, i) => (answer += `${v}`)));
        answer += '\n';
    }
});

console.log(answer);
