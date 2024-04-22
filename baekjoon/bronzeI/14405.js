/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze I
 *  Problem : 14405
 *  Algorithm : String
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n')[0];

const word = ['chu', 'ka', 'pi'];

let answer = input;
word.forEach((val) => (answer = answer.replace(new RegExp(val, 'g'), ' ')));

console.log(answer.trim() ? 'NO' : 'YES');
