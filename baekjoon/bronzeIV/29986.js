/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 29986
 *  Algorithm : Implementation
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim()
    .split('\n');

const [N, H] = input[0].split(' ').map(Number);
const list = input[1].split(' ').map(Number);

let answer = 0;
for (let i = 0; i < list.length; i++) {
    if (H >= list[i]) {
        answer++;
    }
}
console.log(answer);
