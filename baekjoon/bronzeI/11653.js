/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : Bronze I
 *  Problem : 11653
 *  Algorithm : Math, Number Theory, Prime Number
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim();

let num = Number(input);
const answer = [];
let divisor = 2;

// 소인수분해
while (num >= 2) {
    if (num % divisor === 0) {
        num = num / divisor;
        answer.push(divisor);
    } else {
        divisor++;
    }
}
console.log(answer.join('\n'));
