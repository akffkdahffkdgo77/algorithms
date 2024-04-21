/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : CLASS II (Silver IV)
 *  Problem : 1920
 *  Algorithm : 자료 구조, 정렬, 이분 탐색
 */

const [N, A, M, B] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n');

const arr = A.split(' ').sort();

// 이진 탐색
// 전체 범위를 가운데를 기준으로 두 구간으로 분할
// 조건을 만족하는 구간을 다시 분할하는 방식

// -> arr의 length를 알고 있어야 함
// -> arr 오름차순 정렬
function binarySearch(target) {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor(start + end) / 2;

    while (start <= end) {
        if (target === arr[middle]) {
            return 1;
        }

        // start, end 위치 조정
        if (target > arr[middle]) {
            start = middle + 1;
        } else if (target < arr[middle]) {
            end = middle - 1;
        }

        middle = Math.floor((start + end) / 2);
    }

    return 0;
}

let answer = '';
B.split(' ').forEach((val) => (answer += `${binarySearch(val)}\n`));

console.log(answer.trim());
