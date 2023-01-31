/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Problem Number: 27294
 *  Level: Bronze V
 *  Algorithm: Math, Implementation
 */

const [T, S] = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../../input.txt")
    .toString()
    .trim()
    .split("\n")[0]
    .split(" ")
    .map(Number);

if (T >= 12 && T <= 16) {
    console.log(!S ? 320 : 280);
} else {
    console.log(280);
}
