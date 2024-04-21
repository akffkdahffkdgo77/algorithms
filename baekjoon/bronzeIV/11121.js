/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : Bronze IV
 *  Problem : 11121
 */

const [N, ...input] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n');

let answer = '';
input.forEach((val, index) => {
    if (index < N) {
        const [A, B] = val.split(' ');
        if (A === B) {
            answer += 'OK\n';
        } else {
            answer += 'ERROR\n';
        }
    }
});

console.log(answer.trim());
