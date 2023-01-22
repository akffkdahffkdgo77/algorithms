/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: Bronze IV
 *  Problem : 14038
 */

const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../../input.txt")
    .toString()
    .trim()
    .split("\n");

const sum = input.reduce((prev, cur) => {
    if (cur === "W") {
        prev += 1;
    }

    return prev;
}, 0);

if (sum > 4) {
    console.log("1");
} else if (sum > 2) {
    console.log("2");
} else if (sum > 0) {
    console.log("3");
} else {
    console.log(-1);
}
