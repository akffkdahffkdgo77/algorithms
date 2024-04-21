/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : Bronze IV
 *  Problem : 10797
 */

const [D, input] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n');

const answer = input.split(' ').reduce((prev, cur) => {
    if (cur === D) {
        prev += 1;
    }
    return prev;
}, 0);

console.log(answer);
