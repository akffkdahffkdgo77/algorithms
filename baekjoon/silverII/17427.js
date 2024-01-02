/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: Silver II
 *  Problem : 17427
 *  Algorithm: Math, Number Theory
 */

const N = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../../input.txt")
    .toString()
    .trim();

const num = Number(N);

// 시간 초과...
// i * (n / i) = n;
function getDivisors(n) {
    let result = 0;
    for (let i = 1; i <= Math.sqrt(n); i++) {
        // 나머지가 없다면 divisor
        if (n % i === 0) {
            result += i;
            // 중복 x
            if (n / i !== i) {
                // 약수의 나머지 페어
                result += n / i;
            }
        }
    }
    return result;
}

let sum = 0;
for (let i = 1; i <= num; i++) {
    sum += getDivisors(i);
}

console.log(sum);

// 성공
let sum = 0;
// i값이 num의 약수 배열에 몇 번 포함되어 있는지를 Math.floor(num/i)하면 구할 수 있다
// num이 10이고 i=2일 경우
// -> [1, 2] [1, 2, 4] [1, 2, 3, 6] [1, 2, 4, 8] [1, 2, 5, 10]
// -> 총 5개의 배열에 포함되어 있다
for (let i = 1; i <= num; i++) {
    sum += i * Math.floor(num / i);
}

console.log(sum);
