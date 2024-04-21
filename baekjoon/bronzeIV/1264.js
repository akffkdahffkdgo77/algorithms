/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : Bronze IV
 *  Problem : 1264
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n');

let answer = '';
input.forEach((value) => {
    if (value !== '#') {
        const count = value.split('').reduce((prev, cur) => {
            const key = cur.toLowerCase();
            return { ...prev, [key]: prev[key] ? prev[key] + 1 : 1 };
        }, {});
        const list = Object.keys(count).filter((val) => ['a', 'e', 'i', 'o', 'u'].includes(val));
        answer += `${list.reduce((prev, cur) => (prev += count[cur]), 0)} \n`;
    }
});

console.log(answer.trim());
