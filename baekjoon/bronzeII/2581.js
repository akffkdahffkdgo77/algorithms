/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: Bronze II
 *  Problem : 2581
 *  Algorithm: Math, Number Theory, Prime Number
 */

const [M, N] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(Number);

function isPrime(N) {
    for (let i = 2; i <= Math.sqrt(N); i++) {
        if (N % i === 0) {
            return false;
        }
    }
    return true;
}

const answer = [];
for (let i = M; i <= N; i++) {
    // 1은 소수가 아님
    if (i === 1) {
        continue;
    }
    if (isPrime(i)) {
        answer.push(i);
    }
}

if (answer.length > 0) {
    console.log(answer.reduce((acc, val) => acc + val, 0));
    console.log(Math.min(...answer));
} else {
    console.log(-1);
}
