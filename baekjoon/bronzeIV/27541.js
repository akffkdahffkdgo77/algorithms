/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 27541
 *  Algorithm : Implementation, String
 */

const [N, S] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim()
    .split('\n');

if (S.endsWith('G')) {
    console.log(S.slice(0, -1));
} else {
    console.log(S + 'G');
}
