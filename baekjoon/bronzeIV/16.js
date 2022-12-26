/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: Bronze IV
 *  Problem : 5357
 */

const [N, ...input] = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../../input.txt")
    .toString()
    .trim()
    .split("\n");

let answer = "";
input.forEach((val, index) => {
    if (index < N) {
        val.split("").reduce((prev, cur) => {
            if (prev !== cur) {
                answer += cur;
            }
            return cur;
        }, "");
        answer += "\n";
    }
});
console.log(answer.trim());
