/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: CLASS 1
 *  Problem : 2742
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .split('\n')[0];

let answer = '';
Array.from({ length: Number(input) }).forEach((_, i) => (answer += `${Number(input) - i} \n`));
console.log(answer);
