/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : 새싹
 *  Type : 문자열
 *  Problem : 2744
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .split('\n')[0]
    .split('');

let answer = '';
input.forEach((val) => (answer += val.charCodeAt() >= 97 ? val.toUpperCase() : val.toLowerCase()));
console.log(answer);
