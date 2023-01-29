/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 27257
 *  Algorithm : Math, Implementation, String, Arithmetic Operations
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim()
    .split('');

// how many 0 other than those at the end
let count = input.length;
while (count--) {
    if (input[input.length - 1] === '0') {
        input.pop();
    } else {
        break;
    }
}

const answer = input.reduce((prev, cur) => ({ ...prev, [cur]: prev[cur] ? prev[cur] + 1 : 1 }), {});
console.log(answer['0'] || 0);
