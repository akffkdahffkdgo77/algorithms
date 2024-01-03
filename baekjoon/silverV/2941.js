/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Silver V
 *  Problem : 2941
 *  Algorithm : Implementation, String
 */

let input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim();

const alphabets = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];

let sum = 0;
for (let i = 0; i < alphabets.length; i++) {
    for (let j = 0; j < input.length; j++) {
        if (input.indexOf(alphabets[i]) !== -1) {
            sum++;
            input = input.replace(alphabets[i], ' ');
        }
    }
}

console.log(sum + input.replace(/\s/g, '').length);
