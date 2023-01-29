/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 26566
 *  Algorithm : Math, Geometry, Arithmetic Operations
 */

const [N, ...input] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim()
    .split('\n');

for (let i = 0; i < N * 2; i += 2) {
    const data = input.slice(i, i + 2);
    const [A1, P1] = data[0].split(' ').map(Number);
    const [R1, P2] = data[1].split(' ').map(Number);

    const slicePizza = A1 / P1;
    const wholePizza = (Math.PI * Math.pow(R1, 2)) / P2;
    console.log(slicePizza > wholePizza ? 'Slice of pizza' : 'Whole pizza');
}
