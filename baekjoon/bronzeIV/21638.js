/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 21638
 *  Algorithm : Implementation
 */

const [first, second] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim()
    .split('\n');

const [t1, v1] = first.split(' ').map(Number);
const [t2, v2] = second.split(' ').map(Number);

if (t2 < 0 && v2 >= 10) {
    console.log('A storm warning for tomorrow! Be careful and stay home if possible!');
} else if (t2 < t1) {
    console.log('MCHS warns! Low temperature is expected tomorrow.');
} else if (v2 > v1) {
    console.log('MCHS warns! Strong wind is expected tomorrow.');
} else {
    console.log('No message');
}
