/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Problem Number: 9012
 *  Level: CLASS 2
 *  Algorithm: Data Structure, String, Stack
 */

const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../../input.txt")
    .toString()
    .trim()
    .split("\n");
input.shift();

for (let i = 0; i < input.length; i++) {
    const stack = [];
    let count = 0;
    let isMatching = true;
    while (count < input[i].length) {
        const quotient = input[i].split("")[count++];
        // 왼쪽 괄호면 추가
        if (quotient === "(") {
            stack.push(quotient);
        } else {
            // 스택이 비어있다면 오류
            if (!stack.length) {
                isMatching = false;
                break;
            }
            // 오른쪽 괄호면 pop
            stack.pop();
        }
    }

    if (isMatching && !stack.length) {
        console.log("YES");
    } else {
        console.log("NO");
    }
}
