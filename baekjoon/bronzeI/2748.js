/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: Bronze I
 *  Problem : 2748
 *  Algorithm: Math, DP
 */

const N = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim();

// 한 번 계산된 결과를 메모이제이션 (Memoization)하기 위한 리스트 초기화
let arr = [];

// Memoization 기법
function fibo(x) {
    if (x === 1n || x === 2n) {
        return 1n;
    }

    if (arr[x]) {
        return arr[x];
    }

    arr[x] = fibo(x - 1n) + fibo(x - 2n);

    return arr[x];
}

console.log(fibo(BigInt(N)).toString());
