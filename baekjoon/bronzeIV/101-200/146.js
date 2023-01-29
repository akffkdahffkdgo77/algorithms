/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 21665
 *  Algorithm : Implementation, String
 */

const [dimensions, ...input] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim()
    .split('\n');

const [n, m] = dimensions.split(' ').map(Number);
const first = input.slice(0, n);
const second = input.slice(n + 1);

const answer = first.reduce((prev, cur, i) => {
    let sum = 0;
    cur.split('').forEach((val, j) => {
        if (val === second[i].split('')[j]) {
            sum++;
        }
    });

    return prev + sum;
}, 0);

console.log(answer);
