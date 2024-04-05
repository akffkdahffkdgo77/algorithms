/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 31746
 *  Algorithm : Implementation, String
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim();
const num = Number(input);

if (num % 2 === 0) {
    console.log('SciComLove');
} else {
    console.log('SciComLove'.split('').reverse().join(''));
}
