/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: CLASS 1
 *  Problem : 8958
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .split('\n');
const list = input.slice(1);

let answer = '';
let continued = 0;
list.forEach((row, i) => {
    if (i < input[0]) {
        const ans = row.split('').reduce((prev, cur) => {
            if (cur === 'X') {
                continued = 0;
            } else {
                continued++;
                prev += continued;
            }
            return prev;
        }, 0);
        continued = 0;
        answer += `${ans} \n`;
    }
});

console.log(answer);
