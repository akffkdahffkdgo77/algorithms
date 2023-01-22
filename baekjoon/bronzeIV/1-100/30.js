/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: Bronze IV
 *  Problem : 6778
 */

const [Antenna, Eyes] = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../../input.txt")
    .toString()
    .trim()
    .split("\n")
    .map(Number);

let answer = "";
if (Antenna >= 3 && Eyes <= 4) {
    answer += "TroyMartian\n";
}

if (Antenna <= 6 && Eyes >= 2) {
    answer += "VladSaturnian\n";
}

if (Antenna <= 2 && Eyes <= 3) {
    answer += "GraemeMercurian\n";
}

console.log(answer.trim());
