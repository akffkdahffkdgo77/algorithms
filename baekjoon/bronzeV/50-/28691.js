/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : Bronze V
 *  Problem : 28691
 *  Algorithm : Implementation, String
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim();

const obj = {
    M: 'MatKor',
    W: 'WiCys',
    C: 'CyKor',
    A: 'AlKor',
    $: '$clear'
};

console.log(obj[input]);
