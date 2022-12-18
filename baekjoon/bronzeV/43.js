/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: Bronze V
 *  Problem : 17256
 */

const [A, C] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n');
const [ax, ay, az] = A.split(' ').map(Number);
const [cx, cy, cz] = C.split(' ').map(Number);

console.log(`${cx - az} ${cy / ay} ${cz - ax}`);
