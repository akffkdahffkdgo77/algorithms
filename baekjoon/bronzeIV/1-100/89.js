/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: Bronze IV
 *  Problem : 15474
 */

const [N, A, B, C, D] = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../../input.txt")
    .toString()
    .trim()
    .split("\n")[0]
    .split(" ")
    .map(Number);

const X = Math.ceil(N / A) * B;
const Y = Math.ceil(N / C) * D;

console.log(X >= Y ? Y : X);
