/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 29790
 *  Algorithm : Implementation
 */

const [N, U, L] = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../../../input.txt")
    .toString()
    .trim()
    .split(" ");

if (N >= 1000) {
    if (U >= 8000 || L >= 260) {
        console.log("Very Good");
    } else {
        console.log("Good");
    }
} else {
    console.log("Bad");
}
