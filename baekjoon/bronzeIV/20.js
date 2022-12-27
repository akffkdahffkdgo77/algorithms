/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: Bronze IV
 *  Problem : 5543
 */

const [H, M, L, C, S] = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../../input.txt")
    .toString()
    .trim()
    .split("\n")
    .map(Number);

const findCokeSet = (hamburger) => hamburger + C - 50;
const findSpriteSet = (hamburger) => hamburger + S - 50;

const answer = [H, M, L].reduce((prev, cur) => {
    let cheaper = 0;
    if (findCokeSet(cur) < findSpriteSet(cur)) {
        cheaper = findCokeSet(cur);
    } else {
        cheaper = findSpriteSet(cur);
    }

    return prev && prev < cheaper ? prev : cheaper;
}, 0);

console.log(answer);
