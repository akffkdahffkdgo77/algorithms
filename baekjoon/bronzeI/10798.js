/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : Bronze I
 *  Problem : 10798
 *  Algorithm : Implementation, String
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n');

let answer = [];
for (let i = 0; i < 15; i++) {
    let arr = [];
    for (let j = 0; j < input.length; j++) {
        const row = input[j].split('');
        if (row[i]) {
            arr.push(row[i]);
        }
    }
    if (arr.length) {
        answer.push(arr);
        arr = [];
    }
}

console.log(answer.flat().join(''));
