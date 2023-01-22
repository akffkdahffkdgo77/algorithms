/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 15921
 *  Algorithm : Math
 */

const [N, input] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n');

if (N === '0') {
    console.log('divide by zero');
} else {
    const sum = input
        .split(' ')
        .map(Number)
        .reduce((prev, cur) => prev + cur, 0);

    const estimated = input
        .split(' ')
        .map(Number)
        .reduce((prev, cur) => (prev += cur * (1 / N)), 0);

    console.log(Number(sum / N / estimated).toFixed(2));
}
