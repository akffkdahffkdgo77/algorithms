/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Silver V
 *  Problem : 2563
 *  Algorithm : Implementation
 */

const [N, ...input] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n');

// 색종이 3개가 나란히 -> 100+100+100가 최대 길이
const arr = [...Array(300).keys()].map(() => [...Array(300).keys()].map(() => false));

for (let n = 0; n < input.length; n++) {
    const [x1, y1] = input[n].split(' ').map(Number);
    for (let i = y1 - 1; i < y1 + 9; i++) {
        for (let j = x1 - 1; j < x1 + 9; j++) {
            arr[i][j] = true;
        }
    }
}

console.log(arr.flat().reduce((acc, val) => acc + val, 0));
