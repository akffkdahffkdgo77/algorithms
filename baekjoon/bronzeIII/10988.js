/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : Bronze III
 *  Problem : 10988
 *  Algorithm : Math, String, Arithmetic Operations, Parsing
 */

const word = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim();

const half = Math.floor(word.length / 2);
const secondHalf = word
    .slice(word.length % 2 === 0 ? half : half + 1)
    .split('')
    .reverse()
    .join('');

if (word.slice(0, half) === secondHalf) {
    console.log(1);
} else {
    console.log(0);
}
