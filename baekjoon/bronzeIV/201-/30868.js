/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 30868
 *  Algorithm : Implementation
 */

const [N, ...input] = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../../../input.txt")
    .toString()
    .trim()
    .split("\n")
    .map(Number);

for (let i = 0; i < input.length; i++) {
    console.log("++++ ".repeat(input[i] / 5) + "|".repeat(input[i] % 5));
}
