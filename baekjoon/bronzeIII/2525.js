/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: Bronze III
 *  Problem : 2525
 *  Algorithm: Math, Arithmetic Operations
 */

const [time, minutes] = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../../input.txt")
    .toString()
    .trim()
    .split("\n");

const hour = Math.floor(minutes / 60);
const minute = Math.floor(minutes % 60);

const [startHour, startMin] = time.split(" ").map(Number);

const totalMin = (startMin + minute) % 60;
const totalHour = startHour + hour + Math.floor((startMin + minute) / 60);

console.log(totalHour % 24, totalMin);
