/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 28490
 *  Algorithm : Math, Implementation, Arithmetic Operations
 */

const [N, ...input] = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../../../input.txt")
    .toString()
    .trim()
    .split("\n");

let answer = 0;
for (let i = 0; i < input.length; i++) {
    const [a, b] = input[i].split(" ").map(Number);
    answer = Math.max(answer, a * b);
}
console.log(answer);
