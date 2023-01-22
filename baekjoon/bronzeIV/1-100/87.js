/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: Bronze IV
 *  Problem : 15080
 */

const [first, second] = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../../input.txt")
    .toString()
    .trim()
    .split("\n");

const MIN = 60;
const HOUR = 3600;
const ONE_DAY = 24 * HOUR;

const [h1, m1, s1] = first.split(" : ").map(Number);
const [h2, m2, s2] = second.split(" : ").map(Number);

const begin = h1 * HOUR + m1 * MIN + s1;
const end = h2 * HOUR + m2 * MIN + s2;
const diff = end - begin;

console.log(diff > 0 ? diff : end + ONE_DAY - begin);
