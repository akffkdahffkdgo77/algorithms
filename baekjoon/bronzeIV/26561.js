/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : Bronze IV
 *  Problem : 26561
 */

const [N, ...input] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n');

let answer = '';
input.forEach((val, index) => {
    if (index < N) {
        let [P, T] = val.split(' ').map(Number);

        const ans = Array.from({ length: T }).reduce((prev, cur, index) => {
            // console.log(index + 1);
            if ((index + 1) % 4 === 0) {
                prev += 1;
            }

            if ((index + 1) % 7 === 0) {
                prev -= 1;
            }

            return prev;
        }, P);

        answer += `${ans}\n`;
    }
});

console.log(answer);
