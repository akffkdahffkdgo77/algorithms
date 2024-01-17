/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: Bronze V
 *  Problem : 28113
 *  Algorithm: Math, Implementation, Arithmetic Operations
 */

const [N, A, B] = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../../../input.txt")
    .toString()
    .trim()
    .split(" ")
    .map(Number);

if (A < B) {
    console.log("Bus");
} else if (A === B) {
    console.log("Anything");
} else if (B < A) {
    console.log("Subway");
}
