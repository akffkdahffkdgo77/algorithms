/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: Bronze IV
 *  Problem : 5928
 */

const [D, H, M] = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../../input.txt")
    .toString()
    .trim()
    .split("\n")[0]
    .split(" ")
    .map(Number);

const date1 = new Date(`2011-11-11 11:11:00`);
const date2 = new Date(`2011-11-${D} ${H}:${M}:00`);

const diff = (date2.getTime() - date1.getTime()) / 1000;
console.log(date1 > date2 ? -1 : diff / 60);
