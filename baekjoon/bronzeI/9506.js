/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: Bronze I
 *  Problem : 9506
 *  Algorithm: Math, Implementation, Number Theory
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(Number)
    .slice(0, -1)
    .sort((a, b) => a - b);

for (let i = 0; i < input.length; i++) {
    const num = input[i];
    const arr = [];
    let sum = 0;
    for (let j = 1; j <= num / 2; j++) {
        if (num % j === 0) {
            arr.push(j);
            sum += j;
        }
    }
    if (sum === num) {
        console.log(`${num} = ${arr.join(' + ')}`);
    } else {
        console.log(`${num} is NOT perfect.`);
    }
}
