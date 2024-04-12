/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : Bronze III
 *  Problem : 1247
 *  Algorithm : Math, Arithmetic Operations, Big Number
 */

const N = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n');

const firstList = N.slice(1, Number(N[0]) + 1);
const secondList = N.slice(firstList.length + 2, firstList.length + 2 + Number(N[firstList.length + 1]));
const thirdList = N.slice(firstList.length + 2 + secondList.length + 1);

const firstSum = firstList.reduce((acc, cur) => BigInt(acc) + BigInt(cur), 0n);
const secondSum = secondList.reduce((acc, cur) => BigInt(acc) + BigInt(cur), 0n);
const thirdSum = thirdList.reduce((acc, cur) => BigInt(acc) + BigInt(cur), 0n);

function getAnswer(sum) {
    if (sum === 0n) {
        console.log('0');
    } else if (sum > 0) {
        console.log('+');
    } else {
        console.log('-');
    }
}

getAnswer(firstSum);
getAnswer(secondSum);
getAnswer(thirdSum);
