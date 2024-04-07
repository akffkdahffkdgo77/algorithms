/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 30045
 *  Algorithm : Implementation, String
 */

const [N, ...input] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim()
    .split('\n');

let count = 0;
for (let i = 0; i < Number(N); i++) {
    if (input[i].includes('01') || input[i].includes('OI')) {
        count++;
        continue;
    }
}
console.log(count);
