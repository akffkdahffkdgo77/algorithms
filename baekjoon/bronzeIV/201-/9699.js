/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 9699
 *  Algorithm : Implementation
 */

const [N, ...input] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim()
    .split('\n');

for (let i = 0; i < Number(N); i++) {
    const max = Math.max(...input[i].split(' ').map(Number));
    console.log(`Case #${i + 1}: ${max}`);
}
