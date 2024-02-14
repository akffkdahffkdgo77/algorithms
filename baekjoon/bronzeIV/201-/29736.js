/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 29736
 *  Algorithm : Math, Implementation, Arithmetic Operations
 */

const [AB, input] = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../../../input.txt")
    .toString()
    .trim()
    .split("\n");

const [A, B] = AB.split(" ").map(Number);
const [K, X] = input.split(" ").map(Number);

let count = 0;
for (let i = A; i <= B; i++) {
    if (Math.abs(i - K) <= X) {
        count++;
    }
}
console.log(count || "IMPOSSIBLE");
