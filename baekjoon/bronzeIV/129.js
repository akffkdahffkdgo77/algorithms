/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 25893
 *  Algorithm : Math, Implementation, Arithmetic Operations
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n');
input.shift();

let answer = '';
input.forEach((val) => {
    let count = 0;

    const [a, b, c] = val.split(' ').map(Number);
    if (a >= 10) count++;
    if (b >= 10) count++;
    if (c >= 10) count++;

    answer += `${val}\n${
        !count ? 'zilch' : count === 1 ? 'double' : count === 2 ? 'double-double' : 'triple-double'
    }\n\n`;
});

console.log(answer.trim());
