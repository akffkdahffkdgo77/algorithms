/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : Bronze V
 *  Problem : 26307
 */

const [H, M] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n')[0]
    .split(' ')
    .map(Number);

const hours = H - 9;
const minutes = M - 0;
const answer = !hours && !minutes ? 0 : hours * 60 + minutes;
console.log(answer);
