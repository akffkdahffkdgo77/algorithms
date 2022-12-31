/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: CLASS 2
 *  CATEGORY: Greedy Algorithm
 *  Problem : 2839
 */

const N = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .split('\n')
    .map(Number)[0];

let five = 0;
let three = 0;
let total = N;
while (true) {
    if (total % 5 === 0) {
        five += total / 5;
        total %= 5;
    }

    if (total <= 0) {
        break;
    }

    three++;
    total -= 3;
}

console.log(total < 0 ? -1 : five + three);
