/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 30793
 *  Algorithm : Math, Implementation, Arithmetic Operations
 */

const [P, R] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim()
    .split(' ')
    .map(Number);

const V = P / R;
if (V < 0.2) {
    console.log('weak');
} else if (V < 0.4) {
    console.log('normal');
} else if (V < 0.6) {
    console.log('strong');
} else {
    console.log('very strong');
}
