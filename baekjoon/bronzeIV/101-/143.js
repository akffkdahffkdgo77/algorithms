/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 21631
 *  Algorithm : Math, Implementation
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim()
    .split('\n');

const [white, black] = input[0].split(' ').map(BigInt);
if (white >= black) {
    console.log(black.toString());
} else {
    console.log((white + 1n).toString());
}
