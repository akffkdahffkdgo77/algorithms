/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : CLASS II (Silver V)
 *  Problem : 1181
 *  Algorithm : 문자열, 정렬
 */

const [, ...input] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n');

let answer = '';
[...new Set(input)]
    .sort((a, b) => {
        if (a.length === b.length) {
            return a > b ? 1 : a === b ? 0 : -1;
        }
        return a.length - b.length;
    })
    .forEach((v) => (answer += `${v} \n`));
console.log(answer);
