/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 26560
 *  Algorithm : String
 */

const [N, ...input] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim()
    .split('\n');

for (let i = 0; i < input.length; i++) {
    const index = input[i].lastIndexOf('.');
    if (index === -1) {
        console.log(input[i] + '.');
    } else {
        console.log(input[i]);
    }
}
