/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: Bronze IV
 *  Problem : 13136
 */

const [R, C, N] = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../../input.txt")
    .toString()
    .trim()
    .split("\n")[0]
    .split(" ")
    .map(Number);

console.log(Math.ceil(R / N) * Math.ceil(C / N));
