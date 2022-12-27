/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: Bronze IV
 *  Problem : 5596
 */

const [first, second] = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../../input.txt")
    .toString()
    .trim()
    .split("\n");

const firstTotal = first
    .split(" ")
    .map(Number)
    .reduce((prev, cur) => (prev += cur), 0);
const secondTotal = second
    .split(" ")
    .map(Number)
    .reduce((prev, cur) => (prev += cur), 0);

console.log(`${firstTotal >= secondTotal ? firstTotal : secondTotal}`);
