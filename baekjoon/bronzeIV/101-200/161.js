/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 24356
 *  Algorithm : Math, Arithmetic Operations
 */

const [t1, m1, t2, m2] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim()
    .split('\n')[0]
    .split(' ')
    .map(Number);

// 만약 t1total이 t2total보다 크다면 하루가 지난거임
// 하루를 더해줘야 함
const t1total = m1 + t1 * 60;
const t2total = t1total > m2 + t2 * 60 ? m2 + t2 * 60 + 24 * 60 : m2 + t2 * 60;
const diff = t2total - t1total;

console.log(`${diff} ${Math.floor(diff / 30)}`);
