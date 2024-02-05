/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 27918
 *  Algorithm : Implementation, Simulation
 */

const [N, ...input] = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../../../input.txt")
    .toString()
    .trim()
    .split("\n");

let x = 0;
let y = 0;
for (let i = 0; i < input.length; i++) {
    if (Math.abs(x - y) === 2) {
        break;
    }
    if (input[i] === "D") {
        x++;
    } else {
        y++;
    }
}

console.log(`${x}:${y}`);
