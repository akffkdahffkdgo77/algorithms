/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : Bronze IV
 *  Problem : 4299
 */

const [SUM, SUBTRACT] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n')[0]
    .split(' ')
    .map(Number);

const A = (SUM + SUBTRACT) / 2;
const B = SUM - A;

// 연립방정식
// A + B = X
// A - B = Y

// A = X - B
// B = A - Y

// A = X - (A - Y)
// 2A = X + Y
// A = (X + Y) / 2

// decimal, negative
if (SUM < SUBTRACT || Math.floor(A) !== A) {
    console.log(-1);
} else {
    console.log(`${A} ${B}`);
}
