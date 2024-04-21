/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 30031
 *  Algorithm : Math, Implementation, Arithmetic Operations
 */

const [N, ...input] = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../../../input.txt")
    .toString()
    .trim()
    .split("\n");

let sum = 0;
for (let i = 0; i < input.length; i++) {
    const [x, y] = input[i].split(" ").map(Number);

    if (x === 136) {
        sum += 1000;
    } else if (x === 142) {
        sum += 5000;
    } else if (x === 148) {
        sum += 10000;
    } else {
        sum += 50000;
    }
}

console.log(sum);
