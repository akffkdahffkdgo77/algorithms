/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Silver V
 *  Problem : 1193
 *  Algorithm : Math, Implementation
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim();

let num = Number(input);
let row = 1;

/**
 *         1/1         -> row = 1
 *       1/2 2/1       -> row = 2
 *     3/1 2/2 1/3     -> row = 3
 *    1/4 2/3 3/2 4/1  -> row = 4
 */

// n번째 줄, n번째 인덱스 구하기
while (num > row) {
    num -= row;
    row += 1;
}

// 분자는 1++ (ascending)
// 분모는 1-- (descending)
const y = row - num + 1;
if (row % 2 === 0) {
    console.log(`${num}/${y}`);
} else {
    // 분자는 1-- (descending)
    // 분모는 1++ (ascending)
    console.log(`${y}/${num}`);
}

// 패턴
// for (let i = 1; i <= num; i++) {
//     let str = '';
//     for (let j = i; j > 0; j--) {
//         if (i % 2 === 0) {
//             // 분자는 1 -> num
//             // 분모는 num -> 1
//             str += `${i - j + 1} / ${j} `;
//         } else {
//             // 분자는 num -> 1
//             // 분모는 1 -> num
//             str += `${j} / ${i - j + 1} `;
//         }
//     }
//     console.log(str);
// }
