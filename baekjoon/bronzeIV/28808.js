/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 28808
 *  Algorithm : Implementation, String
 */

const [first, ...input] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim()
    .split('\n');

let count = 0;
const [N, M] = first.split(' ').map(Number);
for (let i = 0; i < N; i++) {
    const list = input[i].split('');
    for (let j = 0; j < M; j++) {
        if (list[j] === '+') {
            count++;
            break;
        }
    }
}
console.log(count);
