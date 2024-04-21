/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : CLASS II (Silver V)
 *  Problem : 11650
 *  Algorithm : 정렬
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n');

input.shift();

input.sort((a, b) => {
    const [x1, y1] = a.split(' ').map(Number);
    const [x2, y2] = b.split(' ').map(Number);

    if (x1 === x2) {
        return y1 - y2;
    }

    return x1 - x2;
});

console.log(input.join('\n'));
