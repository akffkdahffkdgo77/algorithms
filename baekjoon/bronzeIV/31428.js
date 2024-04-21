/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 31428
 *  Algorithm : Implementation, String
 */

const [N, F, H] = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../../../input.txt")
    .toString()
    .trim()
    .split("\n");

let count = 0;
const list = F.split(" ");
for (let i = 0; i < list.length; i++) {
    if (H === list[i]) {
        count++;
    }
}
console.log(count);
