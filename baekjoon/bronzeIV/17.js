/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: Bronze IV
 *  Problem : 5358
 */

const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../../input.txt")
    .toString()
    .trim()
    .split("\n");

let answer = "";
input.forEach((val) => {
    const result = val.split("").reduce((prev, cur) => {
        switch (cur) {
            case "i":
                prev += "e";
                break;
            case "e":
                prev += "i";
                break;
            case "I":
                prev += "E";
                break;
            case "E":
                prev += "I";
                break;
            default:
                prev += cur;
                break;
        }
        return prev;
    }, "");
    answer += `${result} \n`;
});
console.log(answer.trim());
