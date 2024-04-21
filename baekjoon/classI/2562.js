/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : CLASS I (Bronze III)
 *  Problem : 2562
 *  Algorithm : 구현
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .split('\n');

const max = Math.max(...input);
console.log(`${max} \n${input.findIndex((v) => +v === max) + 1}`);
