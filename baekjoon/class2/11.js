/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: CLASS 2
 *  Problem : 10814
 */

const [N, ...rest] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n');

let answer = '';
rest.sort((a, b) => {
    const [ageA] = a.split(' ');
    const [ageB] = b.split(' ');
    return Number(ageA) - Number(ageB);
}).forEach((v, i) => i < N && (answer += `${v} \n`));
console.log(answer);
