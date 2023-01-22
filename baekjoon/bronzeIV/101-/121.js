/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 18698
 *  Algorithm : Implementation, String
 */

const [N, ...input] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n');

let answer = '';
for (let i = 0; i < input.length; i++) {
    let sum = 0;
    let flag = false;
    for (let j = 0; j < input[i].length; j++) {
        const tc = input[i].split('');
        if (tc[j] === 'U' && !flag) {
            sum++;
        } else {
            flag = true;
            continue;
        }
    }
    answer += `${sum}\n`;
}

console.log(answer.trim());
