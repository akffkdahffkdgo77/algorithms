/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: Bronze IV
 *  Problem : 13580
 */

const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../../input.txt")
    .toString()
    .trim()
    .split("\n")[0]
    .split(" ")
    .map(Number);

const [A, B, C] = input;

const isSame = [...new Set(input)].length !== 3;

const max = Math.max(A, B, C);
const min = Math.min(A, B, C);
const num = input.find((val) => val !== max && val !== min);
const isSum = num + min === max;

if (isSame || isSum) {
    console.log("S");
} else {
    console.log("N");
}
