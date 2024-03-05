/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 31495
 *  Algorithm : Implementation, String
 */

const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../../../input.txt")
    .toString()
    .trim();

if (!input.startsWith('"') || !input.endsWith('"') || input == '" "') {
    console.log("CE");
} else {
    const split = input.match(/(")+([a-zA-Z ])+(")/);
    console.log(!split ? "CE" : split[0].slice(1, -1));
}
