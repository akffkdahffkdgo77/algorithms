/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : Bronze IV
 *  Problem : 4589
 */

const [N, ...input] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n');

let answer = 'Gnomes:\n';
input.forEach((val, index) => {
    if (index < Number(N)) {
        const numList = val.split(' ').map(Number);
        const isAscending = [...numList].sort().every((val, index) => val === numList[index]);
        const isDescending = [...numList].sort((a, b) => b - a).every((val, index) => val === numList[index]);
        answer += `${isAscending || isDescending ? 'Ordered' : 'Unordered'} \n`;
    }
});
console.log(answer.trim());
