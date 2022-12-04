/**
 *  Advent of Code 2022
 *  Day 1
 *  Problem : https://adventofcode.com/2022/day/1
 */

const arr = text.split(/\r?\n/);
const additionArr = [];

let add = 0;
array.forEach((ele) => {
    if (!ele) {
        additionArr.push(add);
        add = 0;
    } else {
        add += Number(ele);
    }
});

// Part 1
const max = Math.max(...additionArr);
console.log('Part 1', max);

// Part 2
const second = Math.max(...additionArr.filter((ele) => ele !== max));
const third = Math.max(...additionArr.filter((ele) => ele !== max && ele !== second));
console.log('Part 2', max + second + third);
