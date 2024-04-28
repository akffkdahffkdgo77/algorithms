/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : Bronze IV
 *  Problem : 30794
 */

const [N, result] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split(' ');

if (result === 'miss') {
    console.log(0);
} else if (result === 'bad') {
    console.log(200 * +N);
} else if (result === 'cool') {
    console.log(400 * +N);
} else if (result === 'great') {
    console.log(600 * +N);
} else {
    console.log(1000 * +N);
}
