/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: Bronze V
 *  Problem : 14652
 */

const [_, M, K] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n')[0]
    .split(' ')
    .map(Number);

// N[0] = [0 * 4 + 0, 0 * 4 + 1, 0 * 4 + 2, 0 * 4 + 3]
// N[1] = [1 * 4 + 0, 1 * 4 + 1, 1 * 4 + 2, 1 * 4 + 3]
// N[2] = [2 * 4 + 0, 2 * 4 + 1, 2 * 4 + 2, 2 * 4 + 3]

// 6  = (1, 2) -> (1 * 4 + 2)
// 6  = (i * 4 + 2)
// -> i = (6 - 2) / 4;
// -> 1 = (6 - 2) / 4 -> [1 = 6 / 4]; (몫)

// 6 = (1 * 4 + x)
// -> x = 6 / (4 * 1)
// 2 = 6 / (4 * 1) -> [2 = 6 % 4]; (나머지)
console.log(`${parseInt(K / M, 10)} ${parseInt(K % M, 10)}`);
