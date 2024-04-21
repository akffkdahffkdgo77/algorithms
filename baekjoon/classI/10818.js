/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : CLASS I (Bronze III)
 *  Problem : 10818
 *  Algorithm : 수한, 구현
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .split('\n')[1]
    .split(' ');

const max = Math.max(...input);
const min = Math.min(...input);
console.log(`${min} ${max}`);
