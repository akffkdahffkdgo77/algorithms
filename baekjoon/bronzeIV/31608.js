/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 31608
 *  Algorithm : Implementation, String
 */

const [N, S, T] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n');

let count = 0;
for (let i = 0; i < +N; i++) {
    if (S.charAt(i) !== T.charAt(i)) {
        count++;
    }
}

console.log(count);
