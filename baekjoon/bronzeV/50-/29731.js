/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: Bronze V
 *  Problem : 29731
 *  Algorithm: Implementation, String
 */

const [N, ...input] = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../../../input.txt")
    .toString()
    .trim()
    .split("\n");

const list = [
    "Never gonna give you up",
    "Never gonna let you down",
    "Never gonna run around and desert you",
    "Never gonna make you cry",
    "Never gonna say goodbye",
    "Never gonna tell a lie and hurt you",
    "Never gonna stop"
];

let answer = "No";
for (let i = 0; i < input.length; i++) {
    if (!list.includes(input[i])) {
        answer = "Yes";
    }
}
console.log(answer);
