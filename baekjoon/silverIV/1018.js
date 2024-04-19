/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Silver IV
 *  Problem : 1018
 *  Algorithm : Brute Force
 */

const [first, ...input] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n');

const [N, M] = first.split(' ').map(Number);
const white = ['WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW'];
const black = ['BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB'];

const answer = [];
// 전체 판을 loop할 때 마다 한 칸씩 움직이기
// 언제나 8개씩를 확인해야함
// N이 10 (3 ~ 10까지 확인 가능, i=2)
// M이 13 (6 ~ 13까지 확인 가능, j=5)
for (let i = 0; i < N - 7; i++) {
    for (let j = 0; j < M - 7; j++) {
        let whiteCount = 0;
        let blackCount = 0;
        for (let x = 0; x < 8; x++) {
            for (let y = 0; y < 8; y++) {
                if (input[x + i][y + j] !== white[x][y]) {
                    whiteCount++;
                }
                if (input[x + i][y + j] !== black[x][y]) {
                    blackCount++;
                }
            }
        }
        answer.push(whiteCount);
        answer.push(blackCount);
    }
}

console.log(Math.min(...answer));
