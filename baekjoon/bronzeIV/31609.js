/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 31609
 *  Algorithm : Implementation
 */

const [N, input] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n');

const list = [
    ...new Set(
        input
            .split(' ')
            .map(Number)
            .sort((a, b) => a - b)
    )
];

console.log(list.join('\n'));
