/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: Bronze IV
 *  Problem : 15726
 */

const [A, B, C] = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../../input.txt")
    .toString()
    .trim()
    .split("\n")[0]
    .split(" ")
    .map(Number);

const first = Math.floor((A * B) / C);
const second = Math.floor((A / B) * C);

console.log(first >= second ? first : second);
