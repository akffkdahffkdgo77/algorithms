/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: 새싹
 *  Type : 문자열
 *  Problem : 2754
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .split('\n')[0];

const GRADE = {
    'A+': 4.3,
    A0: 4.0,
    'A-': 3.7,
    'B+': 3.3,
    B0: 3.0,
    'B-': 2.7,
    'C+': 2.3,
    C0: 2.0,
    'C-': 1.7,
    'D+': 1.3,
    D0: 1.0,
    'D-': 0.7,
    F: 0.0
};

console.log(Number(GRADE[input]).toFixed(1));
