/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : Bronze IV
 *  Problem : 5575
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n');

let answer = '';
input.forEach((val) => {
    const [h1, m1, s1, h2, m2, s2] = val.split(' ').map(Number);
    const date1 = new Date(`2022-01-01 ${h1}:${m1}:${s1}`);
    const date2 = new Date(`2022-01-01 ${h2}:${m2}:${s2}`);
    const diff = (date2.getTime() - date1.getTime()) / 1000;

    const hour = parseInt(diff / 3600, 10) % 24;
    const minute = parseInt((diff % 3600) / 60, 10);
    const second = diff % 60;
    answer += `${hour} ${minute} ${second} \n`;
});

console.log(answer.trim());
