/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: Bronze V
 *  Problem : 29863
 *  Algorithm: Math, Arithmetic Operations
 */

const [X, Y] = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../../../input.txt")
    .toString()
    .trim()
    .split("\n")
    .map(Number);

if (X >= 20 && X <= 23) {
    console.log(24 - X + Y);
} else {
    console.log(Y - X);
}
