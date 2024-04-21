/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : Bronze V
 *  Problem : 26766
 */

const N = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n')[0];

const first = ' @@@   @@@ ';
const second = '@   @ @   @';
const third = '@    @    @';
const fourth = '@         @';
const fifth = ' @       @ ';
const sixth = '  @     @  ';
const seventh = '   @   @   ';
const eigth = '    @ @    ';
const last = '     @     ';

const arr = [first, second, third, fourth, fifth, sixth, seventh, eigth, last];

let answer = '';
Array.from({ length: Number(N) }).forEach(() => arr.forEach((val) => (answer += `${val}\n`)));
console.log(answer);
