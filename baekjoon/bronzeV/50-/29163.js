/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze V
 *  Problem : 29163
 *  Algorithm : Math, Implementation, Arithmetic Operations
 */

const [N, input] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim()
    .split('\n');
const list = input.split(' ').map(Number);

let even = 0;
let odd = 0;
for (let i = 0; i < list.length; i++) {
    if (list[i] % 2 === 0) {
        even++;
    } else {
        odd++;
    }
}

console.log(even > odd ? 'Happy' : 'Sad');
