/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 31306
 *  Algorithm : Implementation, String
 */

const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../../../input.txt")
    .toString()
    .trim()
    .split("");
const vowels = ["a", "e", "i", "o", "u"];

console.log(
    input.filter((val) => vowels.includes(val)).length,
    input.filter((val) => vowels.includes(val) || val === "y").length
);
