/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 27590
 *  Algorithm : Implementation, Brute Force, Simulation
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim()
    .split('\n');

const [ds, ys] = input[0].split(' ').map(Number);
const [dm, ym] = input[1].split(' ').map(Number);

let sun = ys - ds;
let moon = ym - dm;

while (sun !== moon) {
    if (sun < moon) {
        sun += ys;
    } else {
        moon += ym;
    }
}
console.log(sun);
