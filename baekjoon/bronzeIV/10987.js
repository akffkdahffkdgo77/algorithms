/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 10987
 *  Algorithm : Implementation, String
 */

const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../../../input.txt")
    .toString()
    .trim()
    .split("");

let answer = 0;
for (let i = 0; i < input.length; i++) {
    if (["a", "e", "i", "o", "u"].includes(input[i])) {
        answer++;
    }
}

console.log(answer);
