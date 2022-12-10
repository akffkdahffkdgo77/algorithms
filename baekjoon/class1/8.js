/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: CLASS 1
 *  Problem : 1157
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .split('\n')[0];

const answer = input.split('').reduce((prev, cur) => {
    const same = cur.toUpperCase();
    return { ...prev, [same]: prev[same] ? prev[same] + 1 : 1 };
}, {});

const max = Math.max(...Object.values(answer));
const filter = Object.keys(answer).filter((val) => answer[val] === max);
console.log(filter.length > 1 ? '?' : filter[0]);
