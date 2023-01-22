/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: Bronze IV
 *  Problem : 5554
 */

const total = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../../input.txt")
    .toString()
    .trim()
    .split("\n")
    .map(Number)
    .reduce((prev, cur) => (prev += cur), 0);

const minute = parseInt((total % 3600) / 60, 10);
const second = total % 60;

console.log(`${minute}\n${second}`);
