/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : Bronze IV
 *  Problem : 6763
 */

const [L, S] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(Number);

const getFine = (speed) => (speed >= 31 ? 500 : speed >= 21 ? 270 : 100);

console.log(
    S > L ? `You are speeding and your fine is $${getFine(S - L)}.` : 'Congratulations, you are within the speed limit!'
);
