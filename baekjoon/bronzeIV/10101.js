/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : Bronze IV
 *  Problem : 10101
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(Number);

const sum = input.reduce((prev, cur) => (prev += cur), 0);

const obj = input.reduce((prev, cur) => ({ ...prev, [cur]: prev[cur] ? prev[cur] + 1 : 1 }), []);
if (sum !== 180) {
    console.log('Error');
} else if (Object.keys(obj).every((key) => Number(key) === 60 && obj[key] === 3)) {
    console.log('Equilateral');
} else if (Object.keys(obj).length === 3) {
    console.log('Scalene');
} else {
    console.log('Isosceles');
}
