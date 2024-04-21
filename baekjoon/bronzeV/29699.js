/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : Bronze V
 *  Problem : 29699
 *  Algorithm : Math, Implementation, String, Arithmetic Operations
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim();

const num = Number(input);
const word = 'WelcomeToSMUPC';
const index = num % word.length || 14;

console.log(word.split('')[index - 1]);
