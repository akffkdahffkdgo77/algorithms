/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : CLASS II (Bronze I)
 *  Problem : 2869
 *  Algorithm : 수학
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

// (A-B) * answer = V - B
const answer = (V - B) % (A - B) !== 0 ? Math.ceil((V - B) / (A - B)) : (V - B) / (A - B);
console.log(answer);
