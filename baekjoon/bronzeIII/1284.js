/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : Bronze III
 *  Problem : 1284
 *  Algorithm : Math, Implementation, Arithmetic Operations
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n')
    .slice(0, -1);

for (let i = 0; i < input.length; i++) {
    const list = input[i].split('').map(Number);
    let sum = 1;
    for (let j = 0; j < list.length; j++) {
        if (list[j] === 1) {
            sum += 2;
        } else if (list[j] === 0) {
            sum += 4;
        } else {
            sum += 3;
        }
        sum++;
    }
    console.log(sum);
}
