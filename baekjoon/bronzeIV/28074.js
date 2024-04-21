/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 28074
 *  Algorithm : Implementation, String
 */

const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../../../input.txt")
    .toString()
    .trim()
    .split("");

const str = "MOBIS";
const obj = input.reduce((prev, cur) => {
    if (str.includes(cur)) {
        return { ...prev, [cur]: prev[cur] ? prev[cur] + 1 : 1 };
    }

    return prev;
}, {});

console.log(Object.keys(obj).length === 5 ? "YES" : "NO");
