/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Silver V
 *  Problem : 11728
 *  Algorithm : 정렬, 투 포인터
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n');

input.shift();

/**
 *  투 포인터 (Two Pointers)
 *  배열이나 문자열같은 선형 구조에서 각자 다른 원소를 가르키는 2개의 포인터를 조작, 원하는 것을 얻어내는 개념
 */
function answer(arr) {
    // 정렬되어 있는 배열 A, B
    const [A, B] = arr;
    const arr1 = A.split(' ').map(Number);
    const arr2 = B.split(' ').map(Number);

    const result = [];
    let left = 0; // start
    let right = 0; // end

    // left 또는 right가 끝까지 간다면 반복문 종료
    while (left < arr1.length || right < arr2.length) {
        // left & right가 아직 arr 끝에 도달하지 않았다면
        if (left < arr1.length && right < arr2.length) {
            // A 배열의 값이 B 배열의 값보다 크다면
            if (arr1[left] > arr2[right]) {
                result.push(arr2[right++]);
            } else {
                // A 배열의 값이 B 배열의 값보다 작거나 같다면
                result.push(arr1[left++]);
            }
        } else {
            // right === arr2.length
            // arr1에 남은 값을 result에 push한다
            if (left < arr1.length) {
                result.push(arr1[left++]);
            } else {
                // left === arr1.length
                // arr2에 남은 값을 result에 push한다
                result.push(arr2[right++]);
            }
        }
    }

    return result;
}

console.log(answer(input).join(' '));
