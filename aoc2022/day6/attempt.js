/**
 *  Advent of Code 2022
 *  Day 6
 *  Problem : https://adventofcode.com/2022/day/6
 */

const input = require('fs').readFileSync('./example.txt').toString().split('\n');

// Part 1
for (let i = 0; i < input.length; i++) {
    const row = input[i].split('');
    for (let j = 0; j < row.length; j++) {
        if (j > 2) {
            const arr = input[i].slice(j - 3, j + 1);
            const obj = arr.split('').reduce((prev, cur) => ({ ...prev, [cur]: prev[cur] ? prev[cur] + 1 : 1 }), 0);
            const isDuplicated = Object.keys(obj).some((key) => obj[key] > 1);
            if (!isDuplicated) {
                console.log('Part 1', j + 1);
                break;
            }
        }
    }
}

// Part 2
for (let i = 0; i < input.length; i++) {
    const row = input[i].split('');
    for (let j = 0; j < row.length; j++) {
        if (j > 12) {
            const arr = input[i].slice(j - 13, j + 1);
            const obj = arr.split('').reduce((prev, cur) => ({ ...prev, [cur]: prev[cur] ? prev[cur] + 1 : 1 }), 0);
            const isDuplicated = Object.keys(obj).some((key) => obj[key] > 1);
            if (!isDuplicated) {
                console.log('Part 2', j + 1);
                break;
            }
        }
    }
}
