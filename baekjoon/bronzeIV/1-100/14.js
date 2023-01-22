/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: Bronze IV
 *  Problem : 4714
 */

const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../../input.txt")
    .toString()
    .trim()
    .split("\n")
    .map(Number);

let answer = "";
input.forEach((val) => {
    if (val > 0) {
        answer += `Objects weighing ${val.toFixed(2)} on Earth will weigh ${(val * 0.167).toFixed(2)} on the moon. \n`;
    }
});
console.log(answer.trim());
