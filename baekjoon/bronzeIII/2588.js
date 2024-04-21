/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : Bronze III
 *  Problem : 2588
 *  Algorithm : Math, Arithmetic Operations
 */

const [first, second] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n');

const secondNum = second.split('');

for (let i = secondNum.length - 1; i >= 0; i--) {
    console.log(Number(first) * secondNum[i]);
}
console.log(Number(first) * Number(second));
