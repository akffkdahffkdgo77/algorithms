/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : CLASS III (Silver IV)
 *  Problem : 17219
 *  Algorithm : 자료 구조, 해시를 사용한 집합과 맵
 */

const [first, ...input] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n');

const [N, M] = first.split(' ').map(Number);
const dict = new Map();
input.slice(0, N).forEach((val) => dict.set(val.split(' ')[0], val.split(' ')[1]));
const searchArr = input.slice(N);

let answer = '';
searchArr.forEach((val) => (answer += `${dict.get(val)}\n`));
console.log(answer.trim());
