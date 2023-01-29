/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 20867
 *  Algorithm : Math, Arithmetic Operations
 */

const [first, second, third] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim()
    .split('\n');

const [M, S, G] = first.split(' ').map(Number);
const [A, B] = second.split(' ').map(Number);
const [L, R] = third.split(' ').map(Number);

const leftSpeed = Math.ceil(M / G); // 올라가기 얼마나 걸리는지
const rightSpeed = Math.ceil(M / S); // 가만히 얼마나 걸리는지

const leftWait = L / A; // 올라가기 대기 friskus
const rightWait = R / B; // 가만히 있기 대기 latmask

if (leftSpeed + leftWait < rightSpeed + rightWait) {
    console.log('friskus');
} else {
    console.log('latmask');
}
