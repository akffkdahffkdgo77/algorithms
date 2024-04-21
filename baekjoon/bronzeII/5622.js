/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : Bronze II
 *  Problem : 5622
 *  Algorithm : Implementation
 */

const wordList = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('');

const alphabets = ['abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz', 'operator'];

let sum = 0;
for (let i = 0; i < wordList.length; i++) {
    if (wordList.includes('operator')) {
        sum += 11;
    } else {
        sum += 3 + alphabets.findIndex((val) => val.includes(wordList[i].toLowerCase()));
    }
}
console.log(sum);
