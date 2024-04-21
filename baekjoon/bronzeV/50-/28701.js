/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : Bronze V
 *  Problem : 28701
 *  Algorithm : Math, Implementation, Arithmetic Operations
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim();
const num = Number(input);

let sum = 0;
let sum2 = 0;
for (let i = 1; i <= num; i++) {
    sum += i;
    sum2 += Math.pow(i, 3);
}
console.log(sum);
console.log(Math.pow(sum, 2));
console.log(sum2);
