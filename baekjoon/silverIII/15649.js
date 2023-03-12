/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Silver III
 *  Problem : 15649
 *  Algorithm : 백트래킹
 */

const [N, M] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split(' ')
    .map(Number);

// 수열 정보
// M이 1이라면 [0]
// M이 2이라면 [0, 0]
// M이 3이라면 [0, 0, 0]
let graph = [...Array(M)].fill(0);
// 방문 정보
// N이 4라면 [false, false, false, false]
let visited = [...Array(N)].fill(false);
// 마지막에 join으로 처리하기 위해서
let answer = [];

function dfs(from) {
    // 수열 완성
    if (from === M) {
        // M까지만
        answer.push(graph.slice(0, M).join(' '));
    }

    // 1부터 N까지 자연수 중에서 중복 없이 M개를 고른 수열
    // [2, 2], [1, 1] -> X
    for (let i = 1; i <= N; i++) {
        if (!visited[i]) {
            // 수열에 저장
            graph[from] = i;
            // 방문 처리
            visited[i] = true;
            dfs(from + 1);
            // 방문 처리 제거
            visited[i] = false;
        }
    }
}

dfs(0);
console.log(answer.join('\n'));
