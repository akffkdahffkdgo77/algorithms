/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 26772
 *  Algorithm : Implementation
 */

const N = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim();

const heart = [
    ' @@@   @@@  ',
    '@   @ @   @ ',
    '@    @    @ ',
    '@         @ ',
    ' @       @  ',
    '  @     @   ',
    '   @   @    ',
    '    @ @     ',
    '     @      '
];

heart.forEach((val) => console.log(val.repeat(N)));
