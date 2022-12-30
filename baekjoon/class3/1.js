/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: CLASS 3
 *  Problem : 1620
 */

const [first, ...rest] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .split('\n');
const [N, M] = first.split(' ').map(Number);
const pokemon = rest.slice(0, N);
const problems = rest.slice(N, N + M);

let answer = '';
const list = new Map(pokemon.map((v, i) => [v, i + 1]));

problems.forEach((prob) => {
    if (!isNaN(Number(prob))) {
        answer += `${pokemon[Number(prob) - 1]} \n`;
    } else {
        answer += `${list.get(prob)} \n`;
    }
});

console.log(answer);
