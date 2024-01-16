/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: Bronze V
 *  Problem : 27959
 *  Algorithm: Math, Arithmetic Operations
 */

const [N, M] = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../../../input.txt")
    .toString()
    .trim()
    .split(" ")
    .map(Number);

console.log(100 * N >= M ? "Yes" : "No");
