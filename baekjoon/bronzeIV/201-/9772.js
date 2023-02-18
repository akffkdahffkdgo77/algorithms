/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 9772
 *  Algorithm : Math, Implementation, Geometry
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim()
    .split('\n');

for (let i = 0; i < input.length; i++) {
    const [x, y] = input[i].split(' ').map(Number);
    if (x === 0 || y === 0) {
        console.log('AXIS');
    } else if (x > 0 && y > 0) {
        console.log('Q1');
    } else if (x > 0 && y < 0) {
        console.log('Q4');
    } else if (x < 0 && y > 0) {
        console.log('Q2');
    } else {
        console.log('Q3');
    }
}
