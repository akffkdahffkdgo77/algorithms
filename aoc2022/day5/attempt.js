text.split(/\r?\n/).forEach((ele) => {
    const move = Number(ele.replace('move', '').split(' from ')[0]);
    const from = Number(ele.replace('move', '').split(' to ')[0].slice(-1));
    const to = Number(ele.replace('move', '').split(' to ')[1]);

    // Part 1
    for (let i = 0; i < +move; i++) {
        const reverse = data[+from - 1].reverse();
        const pop = reverse.pop();
        data[+from - 1].reverse(); // back to original
        data[+to - 1].unshift(pop);
    }
    console.log('Part 1', data.map((ele) => ele[0]).join(''));

    // Part 2
    const popped = [];
    for (let i = 0; i < +move; i++) {
        const reverse = data[+from - 1].reverse();
        const pop = reverse.pop();
        popped.push(pop);
        data[+from - 1].reverse(); // back to original
    }
    data[+to - 1].unshift(...popped);
    console.log('Part 2', data.map((ele) => ele[0]).join(''));
});
