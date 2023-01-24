/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 25640
 *  Algorithm : Implementation, String
 */

const [MBTI, N, ...input] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim()
    .split('\n');

const answer = input.reduce((prev, cur) => {
    if (cur === MBTI) {
        prev++;
    }
    return prev;
}, 0);

console.log(answer);
