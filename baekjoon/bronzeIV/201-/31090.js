/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 31090
 *  Algorithm : Math, Implementation, Arithmetic Operations
 */

const [N, ...input] = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../../../input.txt")
    .toString()
    .trim()
    .split("\n");

for (let i = 0; i < input.length; i++) {
    const num = Number(input[i]);
    const last = Number(input[i].slice(2));
    if ((num + 1) % last === 0) {
        console.log("Good");
    } else {
        console.log("Bye");
    }
}
