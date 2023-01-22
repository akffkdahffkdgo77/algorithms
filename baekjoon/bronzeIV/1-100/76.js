/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: Bronze IV
 *  Problem :14065
 */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 3.785411784 liter per M * 1609.344 meter
// 1 liter = (M * 1609.344 * 0.001) / 3.785411784 km
// 100 km : xl = (M * 1609.344 * 0.001) / 3.785411784 km : 1l

// => x = 100 / (M * 1609.344 * 0.001) / 3.785411784
rl.on('line', function (line) {
    const M = Number(line);
    const kilometer = 1609.344 / 1000;
    const liter = 3.785411784;
    const converted = 100 / (M * (kilometer / liter));

    console.log(converted.toFixed(6));
    rl.close();
}).on('close', function () {
    process.exit();
});
