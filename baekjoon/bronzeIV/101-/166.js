/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 24860
 *  Algorithm : Math, Arithmetic Operations, Combination
 */

const [first, second, third] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim()
    .split('\n');

const [v1, j1] = first.split(' ').map(Number);
const [v2, j2] = second.split(' ').map(Number);
const [v3, d3, j3] = third.split(' ').map(Number);

const lightChainK = v1 * j1;
const lightChain2 = v2 * j2;
const heavyChain = v3 * d3 * j3;

console.log(heavyChain * (lightChain2 + lightChainK));
