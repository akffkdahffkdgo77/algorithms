/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: Bronze IV
 *  Problem : 13623
 */

const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../../input.txt")
    .toString()
    .trim()
    .split("\n")[0]
    .split(" ")
    .map(Number);

const LIST = ["A", "B", "C"];

if (input.every((val) => val === 1) || input.every((val) => !val)) {
    console.log("*");
} else {
    const obj = input.reduce((prev, cur) => ({ ...prev, [cur]: prev[cur] ? prev[cur] + 1 : 1 }), {});
    Object.keys(obj).forEach((key) => {
        if (obj[key] === 1) {
            const index = input.findIndex((val) => Number(key) === val);
            console.log(LIST[index]);
        }
    });
}
