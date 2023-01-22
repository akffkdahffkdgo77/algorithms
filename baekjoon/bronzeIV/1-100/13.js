/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: Bronze IV
 *  Problem : 4696
 */

const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../../input.txt")
    .toString()
    .trim()
    .split("\n")
    .map(Number);

let answer = "";
input.forEach((val) => {
    if (val) {
        const sum = Array.from({ length: 5 }).reduce((prev, _, index) => (prev += Math.pow(val, index)), 0);
        answer += `${sum.toFixed(2)} \n`;
    }
});
console.log(answer);
