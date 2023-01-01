/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: Bronze IV
 *  Problem : 11948
 */

const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../../input.txt")
    .toString()
    .trim()
    .split("\n")
    .map(Number);

const [A, B, C, D, E, F] = input;
const minIndex = input.findIndex((val) => val === Math.min(A, B, C, D));
const secondMinIndex = 4 + [E, F].findIndex((val) => val === Math.min(E, F));

const answer = input.reduce((prev, cur, index) => {
    if (index !== minIndex && index !== secondMinIndex) {
        prev += cur;
    }
    return prev;
}, 0);

console.log(answer);
