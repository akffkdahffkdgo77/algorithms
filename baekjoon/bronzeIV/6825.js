/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : Bronze IV
 *  Problem : 6825
 */

const [W, H] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(Number);

const BMI = W / (H * H);

let answer = '';
if (BMI > 25) {
    answer = 'Overweight';
} else if (BMI >= 18.5) {
    answer = 'Normal weight';
} else {
    answer = 'Underweight';
}

console.log(answer);
