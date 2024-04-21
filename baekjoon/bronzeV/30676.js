/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : Bronze V
 *  Problem : 30676
 *  Algorithm : Implementation
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim();

const num = Number(input);

if (num >= 620 && num <= 780) {
    console.log('Red');
} else if (num >= 590 && num < 620) {
    console.log('Orange');
} else if (num >= 570 && num < 590) {
    console.log('Yellow');
} else if (num >= 495 && num < 570) {
    console.log('Green');
} else if (num >= 450 && num < 495) {
    console.log('Blue');
} else if (num >= 425 && num < 450) {
    console.log('Indigo');
} else if (num >= 380 && num < 425) {
    console.log('Violet');
}
