/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: CLASS 2
 *  Problem : 15829
 */

const [N, input] = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../../input.txt")
    .toString()
    .trim()
    .split("\n");

const R = 31;
const M = 1234567891;

// mod = %
let hash = 0;
let power = 1;
for (let i = 0; i < Number(N); i++) {
    hash += ((input[i].charCodeAt() - 96) * power) % M;
    power = (power * R) % M;
}

console.log(hash % M);
