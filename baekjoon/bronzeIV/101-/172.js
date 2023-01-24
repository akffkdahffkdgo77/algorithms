/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 25600
 *  Algorithm : Math, Implementation, Arithmetic Operations
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim()
    .split('\n');
input.shift();

const arr = [];
input.forEach((val) => {
    const [a, d, g] = val.split(' ').map(Number);
    const sum = d + g;
    if (a === sum) {
        arr.push(a * sum * 2);
    } else {
        arr.push(a * sum);
    }
});

console.log(Math.max(...arr));
