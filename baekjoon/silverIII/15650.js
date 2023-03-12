/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Silver III
 *  Problem : 15650
 *  Algorithm : 백트래킹
 */

const [N, M] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split(' ')
    .map(Number);

// 수열 정보
// M이 3이라면 [0, 0, 0]
let graph = Array(M).fill(0);
// 방문 정보
// N이 4라면 [false, false, false, false]
let visited = Array(N).fill(false);
// 마지막에 join으로 처리하기 위해서
const answer = [];

function dfs(start, from) {
    // 수열 완성
    if (from === M) {
        answer.push(graph.join(' '));
    }

    // 1부터 N까지 자연수 중에서 중복 없이 M개를 고른 수열
    // -> [2, 2], [1, 1] -> X
    // 고른 수열은 오름차순
    //  -> 앞에서 이미 찾은 조합은 다시 뽑지 않도록
    for (let i = start; i <= N; i++) {
        if (!visited[i]) {
            // 수열에 저장
            graph[from] = i;
            // 방문 처리
            visited[i] = true;
            dfs(i, from + 1);
            // 저장한 수 제거
            graph.pop();
            // 방문 처리 제거
            visited[i] = false;
        }
    }
}

// dfs(index의 시작 값, 현재 수열의 원소 개수)
dfs(1, 0);

// 답 출력
console.log(answer.join('\n'));
