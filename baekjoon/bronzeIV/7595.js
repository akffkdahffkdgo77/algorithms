/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : Bronze IV
 *  Problem : 7595
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(Number);

let answer = '';
input.forEach((val) => {
    if (val) {
        Array.from({ length: val }).map((_, i) => (answer += `${'*'.repeat(i + 1)}\n`));
    }
});
console.log(answer);
