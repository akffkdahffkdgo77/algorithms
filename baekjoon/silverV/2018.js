/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Silver V
 *  Problem : 2018
 *  Algorithm : 수학, 투 포인터
 */

const N = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim();

/**
 *  투 포인터 (Two Pointers)
 *  배열이나 문자열같은 선형 구조에서 각자 다른 원소를 가르키는 2개의 포인터를 조작, 원하는 것을 얻어내는 개념
 */

// N = 15
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
//  1. 15
//  2. 1 + 2 + 3 + 4 + 5
//  3. 4 + 5 + 6
//  4. 7 + 8

// sum : 1
//  1 < 15
//  -> start : 1
//  -> end++ : 2
//  -> sum++ : 1 + 2 = 3

// sum : 3
//  3 < 15
//  -> start : 1
//  -> end++ : 3
//  -> sum++ : 1 + 2 + 3 = 6

// sum : 6
//  6 < 15
//  -> start : 1
//  -> end++ : 4
//  -> sum++ : 1 + 2 + 3 + 4 = 10

// sum : 10
//  10 < 15
//  -> start : 1
//  -> end++ : 5
//  -> sum++ : 1 + 2 + 3 + 4 + 5 = 15 (1 + 2 + 3 + 4 + 5)

// ==================================================================
// sum : 15
//  15 === 15
//  -> count++ : 2
//  -> start : 1
//  -> end++ : 6
//  -> sum++ : 1 + 2 + 3 + 4 + 5 + 6 = 21
// ==================================================================

// sum : 21
//  21 > 15
//  -> count : 2
//  -> start++ : 2
//  -> end : 6
//  -> sum-- : 1 + 2 + 3 + 4 + 5 + 6 - 1 = 20

// sum : 20
//  20 > 15
//  -> count : 2
//  -> start++ : 3
//  -> end : 6
//  -> sum-- : 1 + 2 + 3 + 4 + 5 + 6 - 1 - 2 = 18

// sum : 18
//  18 > 15
//  -> count : 2
//  -> start++ : 4
//  -> end : 6
//  -> sum-- : 1 + 2 + 3  + 4 + 5 + 6 - 1 - 2 - 3 = 15 (4 + 5 + 6)

// ============================================================
// sum : 15
//  15 === 15
//  -> count++ : 3
//  -> start : 4
//  -> end++ : 7
//  -> sum++ : 4 + 5 + 6 + 7 = 22
// ============================================================

// sum : 22
//  22 > 15
//  -> count : 3
//  -> start++ : 5
//  -> end : 7
//  -> sum-- : 4 + 5 + 6 + 7 - 4 = 18

// sum : 18
//  18 > 15
//  -> count : 3
//  -> start++ : 6
//  -> end : 7
//  -> sum-- : 4 + 5 + 6 + 7 - 4 - 5 = 13

// sum : 13
//  13 < 15
//  -> count : 3
//  -> start : 6
//  -> end++ : 8
//  -> sum++ : 4 + 5 + 6 + 7 - 4 - 5 + 8 = 21

// sum : 21
//  21 > 15
//  -> count : 3
//  -> start++ : 7
//  -> end : 8
//  -> sum-- : 4 + 5 + 6 + 7 - 4 - 5 + 8 - 6 = 15 (7 + 8)

// ========================================================
// sum : 15
//  15 === 15
//  -> count++ : 4
//  -> start : 7
//  -> end++ : 9
//  -> sum++ : 7 + 8 + 9 = 24
// ========================================================

let start = 1;
let end = 1;
let sum = 1;
let count = 1; // N도 count에 포함

while (end !== Number(N)) {
    // 합이 N보다 작다면
    if (sum < N) {
        //  앞으로 이동
        //  end를 증가시키고
        //  end + sum
        end++;
        sum += end;
    } else if (sum > N) {
        //  뒤로 이동
        //  sum에서 start를 빼고
        //  start++
        sum -= start;
        start++;
    } else {
        //  result === N
        //  count 증가
        //  앞으로 이동
        count++;
        end++;
        sum += end;
    }
}

console.log(count);
