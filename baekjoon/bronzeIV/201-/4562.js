/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 4562
 *  Algorithm : Implementation
 */

const [N, ...input] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim()
    .split('\n');

for (let i = 0; i < input.length; i++) {
    const [X, Y] = input[i].split(' ').map(Number);
    if (X >= Y) {
        console.log('MMM BRAINS');
    } else {
        console.log('NO BRAINS');
    }
}
