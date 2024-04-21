/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : Bronze III
 *  Problem : 5893
 *  Algorithm : 수학, 구현, 임의 정밀도 / 큰 수 연산
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n');

console.log((BigInt('0b' + input) * 17n).toString(2));
