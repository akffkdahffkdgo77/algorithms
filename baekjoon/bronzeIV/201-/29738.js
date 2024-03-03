/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 29738
 *  Algorithm : Implementation
 */

const [N, ...input] = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../../../input.txt")
    .toString()
    .trim()
    .split("\n")
    .map(Number);

for (let i = 0; i < input.length; i++) {
    if (input[i] > 4500) {
        console.log(`Case #${i + 1}: Round 1`);
    } else if (input[i] <= 4500 && input[i] > 1000) {
        console.log(`Case #${i + 1}: Round 2`);
    } else if (input[i] <= 1000 && input[i] > 25) {
        console.log(`Case #${i + 1}: Round 3`);
    } else {
        console.log(`Case #${i + 1}: World Finals`);
    }
}
