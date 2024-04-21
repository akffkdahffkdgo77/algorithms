/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : Bronze IV
 *  Problem : 10768
 */

const [M, D] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n');

const date1 = new Date(2015, M, D);
const date2 = new Date(2015, 2, 18);

console.log(date1 > date2 ? 'After' : date1 < date2 ? 'Before' : 'Special');
