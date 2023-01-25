/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 26731
 *  Algorithm : Implementation, String
 */

const S = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim()
    .split('')
    .sort((a, b) => a.localeCompare(b));

let arr = Array.from({ length: 26 }).map((_, i) => String.fromCharCode(i + 65));

for (let i = 0; i < arr.length; i++) {
    if (S.includes(arr[i])) {
        arr[i] = '';
    }
}

console.log(arr.filter((val) => val)[0]);
