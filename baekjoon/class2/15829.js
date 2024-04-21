/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : CLASS II (Bronze II)
 *  Problem : 15829
 *  Algorithm : 구현, 문자열, 해싱
 */

const [N, input] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n');

const R = 31;
const M = 1234567891;

// mod = %
let hash = 0;
let power = 1;
for (let i = 0; i < Number(N); i++) {
    hash += ((input[i].charCodeAt() - 96) * power) % M;
    power = (power * R) % M;
}

console.log(hash % M);
