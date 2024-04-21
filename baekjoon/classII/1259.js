/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : CLASS II (Bronze I)
 *  Problem : 1259
 *  Algorithm : 구현, 문자열
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n');

let answer = '';
input.forEach((v) => {
    if (Number(v)) {
        const reversed = v.split('').reverse().join('');
        answer += v === reversed ? `yes \n` : `no \n`;
    }
});
console.log(answer);
