/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : CLASS II (Bronze II)
 *  Problem : 1978
 *  Algorithm : 수학, 정수론, 소수 판정
 */

const [, input] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n');
const numList = input.split(' ').map(Number);

let answer = 0;
numList.forEach((num) => {
    // 0, 1 제외
    if (num > 1) {
        let notPrimeCount = 0;
        // 2 ~ num
        for (let i = 2; i < num; i++) {
            // 소수 아닌 수 체크
            if (num % i === 0) {
                notPrimeCount++;
            }
        }
        answer = notPrimeCount ? answer : answer + 1;
    }
});

console.log(answer);
