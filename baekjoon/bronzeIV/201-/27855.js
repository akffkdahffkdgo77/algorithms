/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 27855
 *  Algorithm : Math, Implementation, Arithmetic Operations
 */

const [P1, P2] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim()
    .split('\n');

const [H1, B1] = P1.split(' ').map(Number);
const [H2, B2] = P2.split(' ').map(Number);

const sum1 = H1 * 3 + B1;
const sum2 = H2 * 3 + B2;

if (sum1 > sum2) {
    console.log(`1 ${sum1 - sum2}`);
} else if (sum2 > sum1) {
    console.log(`2 ${sum2 - sum1}`);
} else {
    console.log('NO SCORE');
}
