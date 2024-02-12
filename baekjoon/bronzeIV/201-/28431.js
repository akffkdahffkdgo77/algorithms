/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 28431
 *  Algorithm : Implementation
 */

const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../../../input.txt")
    .toString()
    .trim()
    .split("\n");

const obj = input.reduce((prev, cur) => ({ ...prev, [cur]: prev[cur] ? prev[cur] + 1 : 1 }), []);

console.log(Object.keys(obj).find((key) => obj[key] % 2 !== 0));
