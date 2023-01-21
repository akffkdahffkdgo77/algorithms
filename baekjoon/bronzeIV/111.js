/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 17388
 *  Algorithm : Implementation
 */

const [S, K, H] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n')[0]
    .split(' ')
    .map(Number);

const sum = S + K + H;
const min = Math.min(S, K, H);
const uni = { [S]: 'Soongsil', [K]: 'Korea', [H]: 'Hanyang' };

console.log(sum >= 100 ? 'OK' : uni[min]);
