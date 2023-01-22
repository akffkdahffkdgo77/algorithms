/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: Bronze IV
 *  Problem : 13985
 */

const [X, OPERATOR, Y, _, SUM] = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../../input.txt")
    .toString()
    .trim()
    .split("\n")[0]
    .split(" ");

console.log(Number(X) + Number(Y) === Number(SUM) ? "YES" : "NO");
