/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : Bronze II
 *  Problem : 10813
 *  Algorithm : Implementation, Simulation
 */

const [num, ...list] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n');

const [N, M] = num.split(' ').map(Number);
const arr = [...Array(N).keys()].map((val) => val + 1);

let tempNum = 0;
for (let idx = 0; idx < M; idx++) {
    const [i, j] = list[idx].split(' ').map(Number);
    tempNum = arr[i - 1];
    arr[i - 1] = arr[j - 1];
    arr[j - 1] = tempNum;
}

console.log(arr.join(' '));
