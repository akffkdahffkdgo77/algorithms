/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: Bronze III
 *  Problem : 5086
 *  Algorithm: Math, Arithmetic Operations
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n');

for (let i = 0; i < input.length; i++) {
    const [x, y] = input[i].split(' ').map(Number);
    if (x === y) {
        continue;
    }
    if (x % y === 0) {
        console.log('multiple');
    } else if (y % x === 0) {
        console.log('factor');
    } else {
        console.log('neither');
    }
}
