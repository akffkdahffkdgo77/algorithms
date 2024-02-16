/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 29725
 *  Algorithm : Implementation
 */

const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../../../input.txt")
    .toString()
    .trim()
    .split("\n");

const white = {
    K: 0,
    P: 1,
    N: 3,
    B: 3,
    R: 5,
    Q: 9
};

const black = {
    k: 0,
    p: 1,
    n: 3,
    b: 3,
    r: 5,
    q: 9
};

let whiteSum = 0;
let blackSum = 0;
for (let i = 0; i < input.length; i++) {
    const pieces = input[i].split("");

    for (let j = 0; j < pieces.length; j++) {
        whiteSum += white[pieces[j]] || 0;
        blackSum += black[pieces[j]] || 0;
    }
}

console.log(whiteSum - blackSum);
