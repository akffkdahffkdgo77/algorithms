/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze II
 *  Problem : 19532
 *  Algorithm : Math, Brute Force
 */

const [a, b, c, d, e, f] = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../../input.txt")
    .toString()
    .trim()
    .split(" ")
    .map(Number);

// ax + by = c && dx + ey = f
for (let x = -999; x <= 999; x++) {
    for (let y = -999; y <= 999; y++) {
        if (c == a * x + b * y && f === d * x + e * y) {
            console.log(x, y);
            break;
        }
    }
}
