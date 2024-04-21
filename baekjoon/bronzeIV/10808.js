/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : Bronze IV
 *  Problem : 10808
 */

const word = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n')[0]
    .split('');

const obj = word.reduce((prev, cur) => ({ ...prev, [cur]: prev[cur] ? prev[cur] + 1 : 1 }), {});

const answer = Array.from({ length: 27 }).reduce((prev, _, i) => {
    const char = String.fromCharCode(i + 96);
    return { ...prev, [char]: obj[char] ?? 0 };
});

console.log(
    Object.values(answer)
        .reduce((prev, cur) => (prev += `${cur} `), '')
        .trim()
);
