/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 30402
 *  Algorithm : Implementation, String
 */

let input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../../../input.txt")
    .toString()
    .trim();

input = input
    .replace(/(r|o|p|y)/gi, "")
    .split(" ")
    .join("");

if (input.includes("w")) {
    console.log("chunbae");
} else if (input.includes("b")) {
    console.log("nabi");
} else {
    console.log("yeongcheol");
}
