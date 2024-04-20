/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: CLASS 2 (Silver V)
 *  Problem : 11866
 *  Algorithm : 구현, 자료 구조, 큐
 */

const [N, K] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split(' ')
    .map(Number);

const list = Array.from({ length: N }, (_, idx) => idx + 1);

let idx = 0;
let kCount = 0;
const answer = [];

while (answer.length !== N) {
    if (++kCount % K === 0) {
        answer.push(list[idx]);
        // 배열 길이가 변경되었기 때문에 idx--
        list.splice(idx--, 1);
    }

    // 아직 남아 있는 사람이 있는데 한 바퀴를 다 돌았을 때, idx를 초기화
    // 초기화해서 다시 배열의 처음부터 확인하도록
    if (idx === list.length - 1) {
        idx = 0;
    } else {
        idx++;
    }
}
console.log(`<${answer.join(', ')}>`);
