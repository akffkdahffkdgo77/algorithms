/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 28290
 *  Algorithm : Implementation
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim();

if (['fdsajkl;', 'jkl;fdsa'].includes(input)) {
    console.log('in-out');
} else if (['asdf;lkj', ';lkjasdf'].includes(input)) {
    console.log('out-in');
} else if ('asdfjkl;' === input) {
    console.log('stairs');
} else if (';lkjfdsa' === input) {
    console.log('reverse');
} else {
    console.log('molu');
}
