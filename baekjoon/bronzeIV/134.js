/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 20673
 *  Algorithm : Implementation
 */

const [p, q] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(Number);

if (q > 30) {
    console.log('Red');
} else if (p <= 50 && q <= 10) {
    console.log('White');
} else {
    console.log('Yellow');
}
