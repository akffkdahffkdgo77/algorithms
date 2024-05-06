/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 31775
 *  Algorithm : Implementation, String
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n');

const arr = [false, false, false];
for (let i = 0; i < 3; i++) {
    if (input[i].charAt(0) === 'l') {
        arr[0] = true;
    } else if (input[i].charAt(0) === 'k') {
        arr[1] = true;
    } else if (input[i].charAt(0) === 'p') {
        arr[2] = true;
    }
}

console.log(arr.every((val) => val) ? 'GLOBAL' : 'PONIX');
