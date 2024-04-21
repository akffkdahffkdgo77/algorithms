/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 28249
 *  Algorithm : Math, Implementation, String, Arithmetic Operations
 */

const [N, ...input] = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../../../input.txt")
    .toString()
    .trim()
    .split("\n");

const obj = {
    Poblano: 1500,
    Mirasol: 6000,
    Serrano: 15500,
    Cayenne: 40000,
    Thai: 75000,
    Habanero: 125000
};

console.log(input.reduce((prev, cur) => prev + obj[cur], 0));
