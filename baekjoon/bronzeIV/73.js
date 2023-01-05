/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: Bronze IV
 *  Problem : 15680
 */

const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../../input.txt")
    .toString()
    .trim()
    .split("\n")
    .map(Number)[0];

console.log(input ? "Leading the Way to the Future" : "YONSEI");
