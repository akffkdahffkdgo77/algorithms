/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze V
 *  Problem : 27310
 *  Algorithm : Implementation, String
 */

const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../../input.txt")
    .toString()
    .trim();

const sum = input.split("").reduce((prev, cur) => {
    if (cur === ":") {
        return prev + 1;
    }

    if (cur === "_") {
        return prev + 5;
    }

    return prev;
}, 0);

console.log(input.length + sum);
