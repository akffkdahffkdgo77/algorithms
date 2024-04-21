/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : CLASS II (Bronze I)
 *  Problem : 10989
 *  Algorithm : 정렬
 */

const [N, ...rest] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .split('\n');

rest.sort((a, b) => a - b).forEach((v, i) => i < N && console.log(v));
