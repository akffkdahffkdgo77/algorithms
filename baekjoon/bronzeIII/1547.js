/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : Bronze III
 *  Problem : 1547
 *  Algorithm : Implementation, Simulation
 */

const [N, ...input] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n');

const list = [1, 2, 3];
for (let i = 0; i < Number(N); i++) {
    const [x, y] = input[i].split(' ').map(Number);
    let prevX = list[x - 1];
    let prevY = list[y - 1];
    list[x - 1] = prevY;
    list[y - 1] = prevX;
}

console.log(list.findIndex((val) => val === 1) + 1);
