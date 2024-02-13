/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 28453
 *  Algorithm : Implementation
 */

const [N, input] = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../../../input.txt")
    .toString()
    .trim()
    .split("\n");

const list = input.split(" ").map(Number);

let answer = [];
for (let i = 0; i < list.length; i++) {
    if (list[i] === 300) {
        answer.push("1");
    } else if (list[i] >= 275) {
        answer.push("2");
    } else if (list[i] >= 250) {
        answer.push("3");
    } else {
        answer.push("4");
    }
}

console.log(answer.join(" "));
