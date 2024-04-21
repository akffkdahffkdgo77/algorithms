/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Silver III
 *  Problem : 20291
 *  Algorithm : 자료 구조, 문자열, 정렬, 해시를 사용한 집합과 맵, 파싱
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n');
input.shift();

const hash = new Map();
input.forEach((val) => {
    const ext = val.split('.')[1];
    hash.set(ext, hash.get(ext) ? hash.get(ext) + 1 : 1);
});

const answer = [...hash]
    .sort((a, b) => a[0].localeCompare(b[0]))
    .join('\n')
    .replace(/,/g, ' ');
console.log(answer);
