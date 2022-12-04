/**
 *  Advent of Code 2022
 *  Day 2
 *  Problem : https://adventofcode.com/2022/day/2
 */

const arr = text.split(/\r?\n/);
let score = 0;

// Part 1
arr.forEach((ele) => {
    const win = ['C X', 'A Y', 'B Z'];
    const lose = ['B X', 'C Y', 'A Z'];
    const same = ['A X', 'B Y', 'C Z'];

    if (win.includes(ele)) {
        score += win.indexOf(ele) + 1 + 6;
    } else if (lose.includes(ele)) {
        score += lose.indexOf(ele) + 1 + 0;
    } else {
        score += same.indexOf(ele) + 1 + 3;
    }
});
console.log('Part 1', score);

// Part 2
score = 0;
arr.forEach((ele) => {
    const win = ['C Z', 'A Z', 'B Z'];
    const lose = ['B X', 'C X', 'A X'];
    const same = ['A Y', 'B Y', 'C Y'];

    if (ele.includes('Z')) {
        score += win.indexOf(ele) + 1 + 6;
    } else if (ele.includes('X')) {
        score += lose.indexOf(ele) + 1 + 0;
    } else {
        score += same.indexOf(ele) + 1 + 3;
    }
});
console.log('Part 2', score);
