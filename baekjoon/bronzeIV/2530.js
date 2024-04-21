/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : Bronze IV
 *  Problem : 2530
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n');

const [H, M, S] = input[0].split(' ').map(Number);
const D = Number(input[1]);
const time = H * 3600 + M * 60 + S + D;

const hour = parseInt(time / 3600, 10) % 24;
const minute = parseInt((time % 3600) / 60, 10);
const second = time % 60;

console.log(`${hour} ${minute} ${second}`);
