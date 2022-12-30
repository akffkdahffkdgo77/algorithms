/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: Bronze IV
 *  Problem : 9316
 */

const N = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n')[0];

let answer = '';
Array.from({ length: N }).forEach((_, i) => (answer += `Hello World, Judge ${i + 1}!\n`));
console.log(answer.trim());
