/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: Bronze IV
 *  Problem : 8718
 */

const [X, K] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n')[0]
    .split(' ')
    .map(Number);

// 단위 kl -> ml
// K = 눈덩이 하나의 크기 (대, 중 , 소 중 어떤거인지 모름)
// X = 총 눈

// 가장 큰 K
// K + 1/2K + 1/4 (0.5 / 2)
// 4/4 + 2/4 + 1/4 => 7/4K

// 중간 K
// 2K + K + 1/2K
// 4/2 + 2/2 + 1/2 => 7/2K

// 작은 K
// 4K + 2K + K
// 4 + 2 + 1 => 7

if (7 * K <= X) {
    console.log(7 * K * 1000);
} else if ((7 / 2) * K <= X) {
    console.log((7 / 2) * K * 1000);
} else if ((7 / 4) * K <= X) {
    console.log((7 / 4) * K * 1000);
} else {
    console.log(0);
}
