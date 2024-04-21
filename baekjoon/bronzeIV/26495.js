/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 26495
 *  Algorithm : Implementation
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim()
    .split('')
    .map(Number);

const bigNumbers = {
    0: '0000\n0  0\n0  0\n0  0\n0000',
    1: '   1\n   1\n   1\n   1\n   1',
    2: '2222\n   2\n2222\n2\n2222',
    3: '3333\n   3\n3333\n   3\n3333',
    4: '4  4\n4  4\n4444\n   4\n   4',
    5: '5555\n5\n5555\n   5\n5555',
    6: '6666\n6\n6666\n6  6\n6666',
    7: '7777\n   7\n   7\n   7\n   7',
    8: '8888\n8  8\n8888\n8  8\n8888',
    9: '9999\n9  9\n9999\n   9\n   9'
};

const answer = input.reduce((prev, cur) => prev + bigNumbers[cur] + '\n\n', '');
console.log(answer);
