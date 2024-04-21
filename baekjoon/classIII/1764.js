/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : CLASS III (Silver IV)
 *  Problem : 1764
 *  Algorithm : 자료 구조, 문자열, 정렬, 해시를 사용한 집합과 맵
 */

const [first, ...input] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n');

const [N, M] = first.split(' ').map(Number);

const arr = input.slice(0, N).sort((a, b) => a.localeCompare(b));

function binarySearch(target) {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor(start + end) / 2;

    while (start <= end) {
        if (target === arr[middle]) {
            return true;
        }

        // start, end 위치 조정
        if (target > arr[middle]) {
            start = middle + 1;
        } else if (target < arr[middle]) {
            end = middle - 1;
        }

        middle = Math.floor((start + end) / 2);
    }

    return false;
}

const answer = input
    .slice(N)
    .sort((a, b) => a.localeCompare(b))
    .filter((val) => binarySearch(val));

console.log(answer.length);
console.log(answer.join('\n'));
