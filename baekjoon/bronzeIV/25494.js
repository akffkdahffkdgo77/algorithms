/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 25494
 *  Algorithm : Math, Brute Force Algorithm, Arithmetic Operations
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim()
    .split('\n');
input.shift();

let answer = '';
for (let i = 0; i < input.length; i++) {
    const [a, b, c] = input[i].split(' ').map(Number);

    let count = 0;
    for (let x = 1; x <= a; x++) {
        for (let y = 1; y <= b; y++) {
            for (let z = 1; z <= c; z++) {
                if (x % y === y % z && y % z === z % x && z % x === x % y) {
                    count++;
                }
            }
        }
    }
    answer += `${count}\n`;
}

console.log(answer.trim());
