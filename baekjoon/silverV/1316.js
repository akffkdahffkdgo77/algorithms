/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Silver V
 *  Problem : 1316
 *  Algorithm : Implementation, String
 */

const [N, ...input] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n');

function isGroupWord(arr) {
    const list = []; // 연속되는 단어 리스트
    let result = true;
    for (let j = 0; j < arr.length; j++) {
        // list에 아직 없는 단어라면 추가하기 (연속된 문자)
        if (list.indexOf(arr[j]) === -1) {
            list.push(arr[j]);
        } else {
            // 만약 arr[j]가 이미 list에 존재한다면 (중복된 문자)
            // list.indexOf(arr[j]) === arr[j-1] -> arr[j] === arr[j-1] (연속된 중복 문자)
            // list.indexOf(arr[j]) !== arr[j-1] -> 떨어져서 나타난 중복 문자
            if (list.indexOf(arr[j]) !== list.length - 1) {
                result = false;
                break;
            }
        }
    }
    return result;
}

let answer = 0;
for (let i = 0; i < input.length; i++) {
    const arr = input[i].split('');
    // 문자 길이가 1 또는 모두 중복된 문자라면 (a \ aaa)
    if (arr.length === 1 || new Set(arr).size === 1) {
        answer++;
    } else if (isGroupWord(arr)) {
        answer++;
    }
}

console.log(answer);
