/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 27245
 *  Algorithm : Math, Arithmetic Operations
 */

const [w, l, h] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(Number);

// ratio of the smaller of length and width to height at least 2
// ratio of greater of length and width to lesser of length and width not exceed 2
if (Math.min(w, l) >= 2 * h && Math.max(l, w) <= 2 * Math.min(l, w)) {
    console.log('good');
} else {
    console.log('bad');
}
