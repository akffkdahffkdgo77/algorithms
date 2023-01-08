/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: CLASS 2
 *  Problem : 2108
 */

const [N, ...input] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n');
const numList = input.map(Number).sort((a, b) => a - b);

const avg = Math.round(numList.reduce((prev, cur) => (prev += cur), 0) / Number(N));
const middle = numList[Math.floor(N / 2)];

const dict = new Map();
numList.forEach((val) => dict.set(val, dict.get(val) ? dict.get(val) + 1 : 1));

const max = Math.max(...[...dict.entries()].map(([key, value]) => value));

let frequent = 0;
const arr = [];
for (let [key, value] of dict) {
    if (Number(value) === max) {
        arr.push(key);
    }
}

if (arr.length > 1) {
    frequent = arr[1];
} else {
    frequent = arr[0];
}

const range = Math.max(...numList) - Math.min(...numList);

console.log(avg === -0 ? 0 : avg);
console.log(middle);
console.log(frequent);
console.log(range);
