/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: Bronze IV
 *  Problem : 19944
 */

const [N, M] = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../../input.txt")
    .toString()
    .trim()
    .split("\n")[0]
    .split(" ")
    .map(Number);

console.log(M <= 2 ? "NEWBIE!" : M <= N ? "OLDBIE!" : "TLE!");
