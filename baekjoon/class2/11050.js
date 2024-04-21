/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : CLASS II (Bronze I)
 *  Problem : 11050
 *  Algorithm : 수학, 구현, 조합론
 */

const [N, K] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n')[0]
    .split(' ')
    .map(Number);

function factorial(n) {
    if (n < 2) {
        return 1;
    }

    return n * factorial(n - 1);
}

// 이항 계수
// -> n! / ((n-k)! * k!)
function binomialCoefficient(n, k) {
    return factorial(n) / (factorial(k) * factorial(n - k));
}

console.log(binomialCoefficient(N, K));
