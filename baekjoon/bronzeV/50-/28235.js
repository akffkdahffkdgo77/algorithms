/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: Bronze V
 *  Problem : 28235
 *  Algorithm: Implementation
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim()
    .toUpperCase();

const obj = {
    SONGDO: 'HIGHSCHOOL',
    CODE: 'MASTER',
    2023: '0611',
    ALGORITHM: 'CONTEST'
};

console.log(obj[input]);
