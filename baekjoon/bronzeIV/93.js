/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 17863
 *  Algorithm : Implementation, String
 */

const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../../input.txt")
    .toString()
    .trim()
    .split("\n")[0];

const prefix = Number(input.slice(0, 3));
if (prefix === 555) {
    console.log("YES");
} else {
    console.log("NO");
}
