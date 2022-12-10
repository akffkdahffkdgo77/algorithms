/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: CLASS 1
 *  Problem : 2675
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
