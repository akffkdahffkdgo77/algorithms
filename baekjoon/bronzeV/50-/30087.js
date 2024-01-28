/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: Bronze V
 *  Problem : 30087
 *  Algorithm: Implementation
 */

const [N, ...input] = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../../../input.txt")
    .toString()
    .trim()
    .split("\n");

const obj = {
    Algorithm: 204,
    DataAnalysis: 207,
    ArtificialIntelligence: 302,
    CyberSecurity: "B101",
    Network: 303,
    Startup: 501,
    TestStrategy: 105
};

for (let i = 0; i < input.length; i++) {
    console.log(obj[input[i]]);
}
