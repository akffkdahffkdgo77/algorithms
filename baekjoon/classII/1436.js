/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : CLASS II (Silver V)
 *  Problem : 1436
 *  Algorithm : Brute Force
 */

const N = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim();

const arr = [];
let count = 0;
let answer = 0;

while (answer !== Number(N)) {
    count++;
    if (count.toString().includes('666')) {
        answer++;
        arr.push(count);
    }
}

console.log(arr.pop());
