/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 28295
 *  Algorithm : Math, Implementation
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(Number);

let direction = 0;
for (let i = 0; i < input.length; i++) {
    if (input[i] === 1) {
        direction += 90;
    } else if (input[i] === 2) {
        direction += 180;
    } else {
        direction -= 90;
    }
    if (direction <= -360) {
        direction += 360;
    }
    if (direction >= 360) {
        direction -= 360;
    }
}
if (direction === 0) {
    console.log('N');
} else if (direction === 90 || direction === -270) {
    console.log('E');
} else if (direction === 180 || direction === -180) {
    console.log('S');
} else {
    console.log('W');
}
