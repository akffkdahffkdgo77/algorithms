/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : Bronze IV
 *  Problem : 16199
 */

const [birth, date] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n');

const [Yb, Mb, Db] = birth.split(' ').map(Number);
const [Yd, Md, Dd] = date.split(' ').map(Number);

let first = Yd === Yb ? 0 : Yd - Yb;
if (first && (Md < Mb || (Md === Mb && Dd < Db))) {
    first -= 1;
}

const second = Yd - Yb + 1;
const third = Yd - Yb;

console.log(first);
console.log(second);
console.log(third);
