/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : Bronze IV
 *  Problem : 2742
 *  Algorithm : 구현
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .split('\n')[0];

let answer = '';
Array.from({ length: Number(input) }).forEach((_, i) => (answer += `${Number(input) - i} \n`));
console.log(answer);
