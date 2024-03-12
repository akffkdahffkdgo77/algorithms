/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: Bronze V
 *  Problem : 30664
 *  Algorithm: Math, Arithmetic Operations
 */

const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../../../input.txt")
    .toString()
    .trim()
    .split("\n")
    .map(BigInt)
    .slice(0, -1);

for (let i = 0; i < input.length; i++) {
    if (input[i] % BigInt(42) === 0n) {
        console.log("PREMIADO");
    } else {
        console.log("TENTE NOVAMENTE");
    }
}
