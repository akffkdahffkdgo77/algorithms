/**
 *  Advent of Code 2022
 *  Day 3
 *  Problem : https://adventofcode.com/2022/day/3
 */

const arr = text.split('\n');
let sum = 0;

// Part 1
arr.forEach((ele) => {
    const half = ele.length / 2;

    const first = [...ele.slice(0, half)].reduce((prev, cur) => ({ ...prev, [cur]: 1 }), {});
    const common = [...ele.slice(half)].filter((v) => first[v]);

    const alphabet = [...new Set(common)][0]?.charCodeAt() || 0;
    sum += alphabet === 0 ? 0 : alphabet >= 97 ? alphabet - 96 : alphabet - 65 + 27;
});
console.log('Part 1', sum);

// Part 2
sum = 0;
let sub = [];
let count = 0;
const result = arr.reduce((prev, cur) => {
    if (count === 2) {
        sub.push(cur);
        prev.push(sub);
        sub = [];
        count = 0;
    } else {
        sub.push(cur);
        count++;
    }

    return prev;
}, []);

result.forEach(([firstStr, secondStr, thirdStr]) => {
    const first = [...firstStr].reduce((prev, cur) => ({ ...prev, [cur]: 1 }), {});
    const second = [...secondStr].filter((v) => first[v]).reduce((prev, cur) => ({ ...prev, [cur]: 1 }), {});

    const common = [...thirdStr].filter((v) => second[v]);

    const alphabet = [...new Set(common)][0]?.charCodeAt() || 0;
    sum += alphabet === 0 ? 0 : alphabet >= 97 ? alphabet - 96 : alphabet - 65 + 27;
});
console.log('Part 2', sum);
