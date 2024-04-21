/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : Bronze IV
 *  Problem : 8558
 */

const N = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n')[0];

function factorial(n) {
    let factorial = 1n;
    for (let i = 0n; i < n; i++) {
        factorial *= n - i;
    }

    return factorial.toString();
}

const answer = factorial(BigInt(N));
console.log(answer.charAt(answer.length - 1));
