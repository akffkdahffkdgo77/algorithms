/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : Bronze III
 *  Problem : 10953
 *  Algorithm : Math, String, Arithmetic Operations, Parsing
 */

const [N, ...list] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n');

for (let i = 0; i < list.length; i++) {
    const [a, b] = list[i].split(',');
    console.log(Number(a) + Number(b));
}
