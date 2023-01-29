/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 18198
 *  Algorithm : Implementation, String
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n')[0];

let A = 0;
let B = 0;
for (let i = 0; i < input.length; i += 2) {
    const [team, score] = input.slice(i, i + 2).split('');
    if (team === 'A') {
        A += Number(score);
    } else {
        B += Number(score);
    }
}

console.log(A > B ? 'A' : 'B');
