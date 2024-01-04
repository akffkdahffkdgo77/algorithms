/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Silver V
 *  Problem : 25206
 *  Algorithm : Math, Implementation, String
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n');

let total = 0;
let average = 0;

const GRADES = {
    'A+': 4.5,
    A0: 4.0,
    'B+': 3.5,
    B0: 3.0,
    'C+': 2.5,
    C0: 2.0,
    'D+': 1.5,
    D0: 1.0,
    F: 0
};

for (let i = 0; i < input.length; i++) {
    const [, point, grade] = input[i].split(' ');
    if (grade !== 'P') {
        total += Number(point);
        average += Number(point) * GRADES[grade];
    }
}
console.log((average / total).toFixed(6));
