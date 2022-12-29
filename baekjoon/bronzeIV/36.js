/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: Bronze IV
 *  Problem : 6916
 */

const N = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../../input.txt")
    .toString()
    .trim()
    .split("\n")[0];

const HORIZONTAL_SEGMENT = " * * *\n";
const VERTICAL_GAP_SEGMENT = "*     *\n";
const VERTICAL_RIGHT_SEGMENT = "      *\n";
const VERTICAL_LEFT_SEGMENT = "*\n";

let answer = "";
switch (N) {
    case "0":
        answer +=
            HORIZONTAL_SEGMENT +
            VERTICAL_GAP_SEGMENT.repeat(3) +
            "\n" +
            VERTICAL_GAP_SEGMENT.repeat(3) +
            HORIZONTAL_SEGMENT;
        break;
    case "1":
        answer += "\n" + VERTICAL_RIGHT_SEGMENT.repeat(3) + "\n" + VERTICAL_RIGHT_SEGMENT.repeat(3) + "\n";
        break;
    case "2":
        answer +=
            HORIZONTAL_SEGMENT +
            VERTICAL_RIGHT_SEGMENT.repeat(3) +
            HORIZONTAL_SEGMENT +
            VERTICAL_LEFT_SEGMENT.repeat(3) +
            HORIZONTAL_SEGMENT;
        break;
    case "3":
        answer +=
            HORIZONTAL_SEGMENT +
            VERTICAL_RIGHT_SEGMENT.repeat(3) +
            HORIZONTAL_SEGMENT +
            VERTICAL_RIGHT_SEGMENT.repeat(3) +
            HORIZONTAL_SEGMENT;
        break;
    case "4":
        answer += "\n" + VERTICAL_GAP_SEGMENT.repeat(3) + HORIZONTAL_SEGMENT + VERTICAL_RIGHT_SEGMENT.repeat(3);
        break;
    case "5":
        answer +=
            HORIZONTAL_SEGMENT +
            VERTICAL_LEFT_SEGMENT.repeat(3) +
            HORIZONTAL_SEGMENT +
            VERTICAL_RIGHT_SEGMENT.repeat(3) +
            HORIZONTAL_SEGMENT;
        break;
    case "6":
        answer +=
            HORIZONTAL_SEGMENT +
            VERTICAL_LEFT_SEGMENT.repeat(3) +
            HORIZONTAL_SEGMENT +
            VERTICAL_GAP_SEGMENT.repeat(3) +
            HORIZONTAL_SEGMENT;
        break;
    case "7":
        answer +=
            HORIZONTAL_SEGMENT + VERTICAL_RIGHT_SEGMENT.repeat(3) + "\n" + VERTICAL_RIGHT_SEGMENT.repeat(3) + "\n";
        break;
    case "8":
        answer +=
            HORIZONTAL_SEGMENT +
            VERTICAL_GAP_SEGMENT.repeat(3) +
            HORIZONTAL_SEGMENT +
            VERTICAL_GAP_SEGMENT.repeat(3) +
            HORIZONTAL_SEGMENT;
        break;
    case "9":
        answer +=
            HORIZONTAL_SEGMENT +
            VERTICAL_GAP_SEGMENT.repeat(3) +
            HORIZONTAL_SEGMENT +
            VERTICAL_RIGHT_SEGMENT.repeat(3) +
            HORIZONTAL_SEGMENT;
        break;
    default:
        break;
}

console.log(answer);
