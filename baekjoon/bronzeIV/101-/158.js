/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 24196
 *  Algorithm : Implementation, String
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim()
    .split('\n')[0]
    .split('');

let index = 0;
let answer = '';
while (index < input.length) {
    const word = input[index];
    answer += word;
    index += word.charCodeAt() - 64;
}
console.log(answer);
