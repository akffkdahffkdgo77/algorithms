/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 26768
 *  Algorithm : String, Implementation
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim();

const translated = { a: 4, e: 3, i: 1, o: 0, s: 5 };

let answer = input.split('');
input.split('').forEach((val, i) => {
    if (translated[val] !== undefined) {
        console.log(answer[i]);
        answer[i] = translated[val];
    }
});

console.log(answer.join(''));
