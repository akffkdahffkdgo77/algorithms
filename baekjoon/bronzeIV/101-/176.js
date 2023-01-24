/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 25703
 *  Algorithm : Implementation
 */

const N = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim()
    .split('\n');

let answer = 'int a;\n';
Array.from({ length: N }).reduce((prev, cur, i) => {
    answer += `int ${'*'.repeat(i + 1)}ptr${i ? i + 1 : ''} = &${prev};\n`;
    return `ptr${i ? i + 1 : ''}`;
}, 'a');
console.log(answer.trim());
