/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 30468
 *  Algorithm : Math, Implementation, Arithmetic Operations
 */

let [STR, DEX, INT, LUK, N] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim()
    .split(' ')
    .map(Number);

let avg = (STR + DEX + INT + LUK) / 4;
let count = 0;
while (avg < N) {
    count++;
    STR++;
    avg = (STR + DEX + INT + LUK) / 4;
}
console.log(count);
