/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: Bronze V
 *  Problem : 29751
 *  Algorithm: Math, Geometry, Arithmetic Operations
 */

const [W, H] = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../../../input.txt")
    .toString()
    .trim()
    .split(" ")
    .map(Number);

console.log(((W * H) / 2).toFixed(1));
