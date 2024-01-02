/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Silver III
 *  Problem : 2606
 *  Algorithm : 그래프 이론, 그래프 탐색, 너비 우선 탐색, 깊이 우선 탐색
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n');

const computers = Number(input.shift());
const pairs = Number(input.shift());

let graph = [...Array(computers + 1)].map(() => []);
let visited = Array.from(computers + 1).fill(false);
let count = 0;

input.forEach((i) => {
    let [from, to] = i.split(' ').map(Number);
    graph[from].push(to);
    graph[to].push(from);
});

function dfs(from) {
    visited[from] = true;
    for (let to of graph[from]) {
        if (!visited[to]) {
            count++;
            dfs(to);
        }
    }
}

dfs(1);
console.log(count);
