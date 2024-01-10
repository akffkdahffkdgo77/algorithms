/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze II
 *  Problem : 2587
 *  Algorithm : Math, Implementation, Sorting, Arithmetic Operations
 */

const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../../input.txt")
    .toString()
    .trim()
    .split("\n")
    .map(Number);

const sorted = input.sort((a, b) => a - b);

console.log(sorted.reduce((acc, prev) => acc + prev, 0) / 5, sorted[2]);
