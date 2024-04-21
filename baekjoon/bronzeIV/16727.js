/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 16727
 *  Algorithm : Implementation
 */

const [first, second] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n');

const [P1, S1] = first.split(' ').map(Number);
const [S2, P2] = second.split(' ').map(Number);

const totalP = P1 + P2;
const totalS = S1 + S2;

if (totalP > totalS) {
    console.log('Persepolis');
} else if (totalP < totalS) {
    console.log('Esteghlal');
} else if (totalP === totalS && P2 !== S1) {
    if (P2 > S1) {
        console.log('Persepolis');
    } else {
        console.log('Esteghlal');
    }
} else {
    console.log('Penalty');
}
