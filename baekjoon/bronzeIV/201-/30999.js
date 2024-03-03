/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 30999
 *  Algorithm : Implementation, String
 */

const [NM, ...input] = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../../../input.txt")
    .toString()
    .trim()
    .split("\n");

const [N, M] = NM.split(" ").map(Number);

let count = 0;
for (let i = 0; i < input.length; i++) {
    const vote = input[i].split("");
    let o = 0;
    let x = 0;
    for (let j = 0; j < vote.length; j++) {
        if (vote[j] === "O") {
            o++;
        } else {
            x++;
        }
    }
    if (o > Math.floor(M / 2)) {
        count++;
    }
}

console.log(count);
