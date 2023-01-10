/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: CLASS 2
 *  Problem : 11651
 */

const [N, ...input] = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../../input.txt")
    .toString()
    .trim()
    .split("\n");

const answer = input
    .sort((a, b) => {
        const [x1, y1] = a.split(" ").map(Number);
        const [x2, y2] = b.split(" ").map(Number);

        if (y1 === y2) {
            return x1 - x2;
        }

        return y1 - y2;
    })
    .join("\n");

console.log(answer);
