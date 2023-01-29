/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 23795
 *  Algorithm : Math, Implementation, Arithmetic Operations
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(Number);

const answer = input.reduce((prev, cur) => {
    if (cur !== -1) {
        prev += cur;
    }
    return prev;
}, 0);
console.log(answer);
