/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: Bronze IV
 *  Problem : 16017
 */

const [A, B, C, D] = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../../input.txt")
    .toString()
    .trim()
    .split("\n")
    .map(Number);

if ([8, 9].includes(A) && B === C && [8, 9].includes(D)) {
    console.log("ignore");
} else {
    console.log("answer");
}
