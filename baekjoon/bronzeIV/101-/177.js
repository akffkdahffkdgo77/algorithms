/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 25704
 *  Algorithm : Math, Implementation, Arithmetic Operations
 */

const [N, price] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(Number);

const firstOption = price - 500;
const secondOption = price - price * 0.1;
const thirdOption = price - 2000;
const fourthOption = price - price * 0.25;

let answer = 0;
if (N >= 20) {
    answer = Math.min(firstOption, secondOption, thirdOption, fourthOption);
} else if (N >= 15) {
    answer = Math.min(firstOption, secondOption, thirdOption);
} else if (N >= 10) {
    answer = Math.min(firstOption, secondOption);
} else if (N >= 5) {
    answer = firstOption;
} else {
    answer = price;
}

console.log(answer < 0 ? 0 : answer);
