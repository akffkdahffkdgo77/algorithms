/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze III
 *  Problem : 26314
 *  Algorithm : Implementation, String
 */

const [N, ...input] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim()
    .split('\n');

for (let i = 0; i < input.length; i++) {
    const list = input[i].split('');
    let vowels = 0;
    let consonants = 0;
    for (let j = 0; j < list.length; j++) {
        if (['a', 'e', 'i', 'o', 'u'].includes(list[j])) {
            vowels++;
        } else {
            consonants++;
        }
    }
    console.log(input[i]);
    console.log(vowels > consonants ? 1 : 0);
}
