/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 22155
 *  Algorithm : Implementation
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim()
    .split('\n');
input.shift();

let answer = '';
input.forEach((val) => {
    const [i, f] = val.split(' ').map(Number);
    answer += (i <= 1 && f <= 2) || (i <= 2 && f <= 1) ? 'Yes\n' : 'No\n';
});
console.log(answer.trim());
