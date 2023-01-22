/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: Bronze IV
 *  Problem : 5300
 */

const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../../input.txt")
    .toString()
    .trim()
    .split("\n")[0];

let answer = "";
Array.from({ length: Number(input) }).forEach((_, index) => {
    answer += `${index + 1} `;
    if ((index + 1) % 6 === 0) {
        answer += "Go! ";
    } else if (index + 1 === Number(input)) {
        answer += "Go! ";
    }
});
console.log(answer.trim());
