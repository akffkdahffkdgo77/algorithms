/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : Bronze IV
 *  Problem : 2480
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n')[0]
    .split(' ')
    .map(Number);

const obj = input.reduce((prev, cur) => ({ ...prev, [cur]: prev[cur] ? prev[cur] + 1 : 1 }), {});
const length = Object.keys(obj).length;

if (length === 3) {
    console.log(Math.max(...Object.keys(obj)) * 100);
} else if (length === 2) {
    console.log(1000 + Number(Object.keys(obj).filter((key) => obj[key] === 2)[0]) * 100);
} else {
    console.log(10000 + Number(Object.keys(obj)[0]) * 1000);
}
