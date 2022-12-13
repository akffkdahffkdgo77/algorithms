/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: CLASS 2
 *  Problem : 2869
 */

const [A, B, V] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .split('\n')[0]
    .split(' ')
    .map(Number);

// let height = 0;
// let day = 0;
// while (height < V) {
//     day++;
//     height += A;
//     if (height === V) break;
//     height -= B;
// }

const answer = (V - B) % (A - B) !== 0 ? Math.ceil((V - B) / (A - B)) : (V - B) / (A - B);
console.log(answer);
