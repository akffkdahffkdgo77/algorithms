/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: Bronze IV
 *  Problem : 2083
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n');

let answer = '';
input.forEach((value) => {
    if (value !== '# 0 0') {
        const [name, age, weight] = value.split(' ');
        if (Number(age) > 17 || Number(weight >= 80)) {
            answer += `${name} Senior \n`;
        } else {
            answer += `${name} Junior \n`;
        }
    }
});

console.log(answer.trim());
