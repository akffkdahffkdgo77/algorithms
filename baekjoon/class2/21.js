/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: CLASS 2
 *  Problem : 10773
 */

const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../../input.txt")
    .toString()
    .trim()
    .split("\n")
    .map(Number);

input.shift();
const arr = [];
input.forEach((val) => {
    if (!val) {
        arr.pop();
    } else {
        arr.push(val);
    }
});

console.log(arr.reduce((prev, cur) => prev + cur, 0));
