/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 26350
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
    const v = val.split(' ').map(Number);
    const d = v.shift();
    answer += `Denominations: ${v.slice(0, d).join(' ')}\n`;

    const arr = [];
    v.reduce((prev, cur, index) => {
        if (index < d) {
            if (prev * 2 <= cur) {
                arr.push(true);
            } else {
                arr.push(false);
            }
        }

        return cur;
    }, 0);
    answer += `${arr.every((val) => val) ? 'Good' : 'Bad'} coin denominations!\n\n`;
});

console.log(answer.trim());
