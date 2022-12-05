const arr = text.split(/\r?\n/);

let part1Count = 0;
let part2Count = 0;
arr.forEach((line) => {
    const [first, second] = line.split(',');
    const [firstMin, firstMax] = first.split('-');
    const [secondMin, secondMax] = second.split('-');

    const firstArr = Array.from({ length: +firstMax - +firstMin + 1 }).map((_, i) => i + +firstMin);
    const secondArr = Array.from({ length: +secondMax - +secondMin + 1 }).map((_, i) => i + +secondMin);

    // Part 1
    const isFirstOverlap = firstArr.every((ele) => secondArr.includes(ele));
    const isSecondOverlap = secondArr.every((ele) => firstArr.includes(ele));

    if (isFirstOverlap || isSecondOverlap) {
        part1Count++;
    }

    // Part 2
    const isFirstPartialOverlap = firstArr.some((ele) => secondArr.includes(ele));
    const isSecondPartialOverlap = secondArr.some((ele) => firstArr.includes(ele));

    if (isFirstPartialOverlap || isSecondPartialOverlap) {
        part2Count++;
    }
});
console.log('Part 1', part1Count);

console.log('Part 2', part2Count);
