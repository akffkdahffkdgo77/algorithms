/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : Bronze III
 *  Problem : 1085
 *  Algorithm : 수학, 기하학
 */

const [x, y, w, h] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .split('\n')[0]
    .split(' ');

console.log(Math.min(...[x, y, w - x, h - y]));
