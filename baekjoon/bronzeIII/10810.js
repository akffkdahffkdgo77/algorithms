/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : Bronze V
 *  Problem : 10810
 *  Algorithm : Implementation, Simulation
 */

const [num, ...list] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n');

const [N, M] = num.split(' ').map(Number);
const arr = [...Array(N).keys()].map(() => 0);

for (let idx = 0; idx < list.length; idx++) {
    const [i, j, k] = list[idx].split(' ').map(Number);

    for (let jdx = i - 1; jdx < j; jdx++) {
        arr[jdx] = k;
    }
}

console.log(arr.join(' '));
