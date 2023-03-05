/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : Silver I
 *  Problem : 2841
 *  Algorithm : 자료 구조, 스택
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .split('\n');

input.shift();

// 스택 초기화 작업
// 기타 줄마다 stack을 쌓는다.
// 만약 array가 6개고 n-1로 접근해서 값을 가져오려고 한다면 TypeError 발생
// -> 그래서 7개로 초기화
const stack = [[], [], [], [], [], [], []];

// stack 첫 번째 값
const [firstN, firstP] = input.shift().split(' ').map(Number);
stack[firstN].push(firstP);

// pop, push할 때마다 count++
let count = 1;
input.forEach((val) => {
    const [n, p] = val.split(' ').map(Number);

    // 이전 값이 현재 p값보다 작을 때 push
    if (stack[n][stack[n].length - 1] < p) {
        stack[n].push(p);
        count++;
    } else {
        // 이전 값이 현재 p값보다 크다면 pop
        while (stack[n][stack[n].length - 1] > p) {
            stack[n].pop();
            count++;
        }

        // 만약 이전 값이 현재 p값과 다르다면
        // 현재 p값을 stack에 push
        if (stack[n][stack[n].length - 1] !== p) {
            stack[n].push(p);
            count++;
        }
    }
});

console.log(count);
