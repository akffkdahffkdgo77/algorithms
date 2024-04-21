/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze V
 *  Problem : 18409
 *  Algorithm : Implementation, String
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n');

input.shift();

const obj = input[0].split('').reduce((prev, cur) => ({ ...prev, [cur]: prev[cur] ? prev[cur] + 1 : 1 }), {});
const answer = Object.keys(obj).reduce((prev, cur) => {
    if (['a', 'e', 'i', 'o', 'u'].includes(cur)) {
        return obj[cur] + prev;
    }

    return prev;
}, 0);

console.log(answer);
