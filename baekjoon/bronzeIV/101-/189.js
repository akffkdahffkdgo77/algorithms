/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 26530
 *  Algorithm : Math, Implementation, Arithmetic Operations
 */

const [N, ...input] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim()
    .split('\n');

let num = 0;
let answer = '';

for (let i = 0; i < N; i++) {
    const x = Number(input[num]) + 1;
    const items = input.slice(num + 1, num + x);

    let sum = 0;
    items.forEach((val) => {
        const [name, numOfProducts, price] = val.split(' ');
        sum += Number(numOfProducts) * Number(price);
    });
    answer += `$${sum.toFixed(2)}\n`;
    num += x;
}

console.log(answer.trim());
