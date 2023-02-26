/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : Silver I
 *  Problem : 1747
 *  Algorithm : 수학, 브루트포스 알고리즘, 정수론, 소수 판정, 에라토스테네스의 체
 */

const N = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString();

// N이 1,000,000일 때 N보다 크거나 같은 소수 : 1,003,001
const MAX = 1003001;

// 소수 찾기 - n까지 판별하기
// function checkForPrime(n) {
//     for (let i = 2; i < n; i++) {
//         if (n % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// 소수 찾기 - n의 제곱근까지 계산
// function checkForPrime(n) {
//     if (n < 2) {
//         return false;
//     }

//     for (let i = 2; i <= Math.ceil(Math.sqrt(n)); i++) {
//         if (n % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// 소수 찾기 - 에라토스테네스의 체
const list = Array(MAX + 1)
    .fill(true)
    .fill(false, 0, 2);

for (let i = 2; i <= MAX; i++) {
    if (list[i]) {
        for (let j = Math.pow(i, 2); j <= MAX; j += i) {
            list[j] = false;
        }
    }
}

for (let i = Number(N); i <= MAX; i++) {
    if (list[i] && String(i) === [...String(i)].reverse().join('')) {
        console.log(i);
        break;
    }
}
