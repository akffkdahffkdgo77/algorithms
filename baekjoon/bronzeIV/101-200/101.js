/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 15873
 *  Algorithm : Math, Arithmetic Operations, 많은 조건 분기
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n')[0];

const arr = input.split('').map(Number);

if (arr.includes(0)) {
    if (arr.length === 4) {
        console.log(20);
    } else if (arr.length === 3 && arr[1] === 0) {
        console.log(10 + arr[2]);
    } else if (arr.length === 3 && arr[2] === 0) {
        console.log(arr[0] + 10);
    }
} else {
    console.log(arr[0] + arr[1]);
}
