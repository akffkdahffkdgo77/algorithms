/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: CLASS 2
 *  Problem : 2609
 */

const [A, B] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .split('\n')[0]
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);

const calculateGCD = (min, max) => (!max ? min : calculateGCD(max, min % max));
const calculateLCM = (min, max) => (min * max) / calculateGCD(min, max);

console.log(calculateGCD(A, B));
console.log(calculateLCM(A, B));
