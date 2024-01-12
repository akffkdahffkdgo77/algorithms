/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze II
 *  Problem : 25305
 *  Algorithm : Implementation, Sorting
 */

const [first, input] = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../../input.txt")
    .toString()
    .trim()
    .split("\n");

const [N, k] = first.split(" ").map(Number);

const sorted = input
    .split(" ")
    .map(Number)
    .sort((a, b) => b - a);

console.log(sorted[k - 1]);
