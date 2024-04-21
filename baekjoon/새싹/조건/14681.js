/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : 새싹
 *  Type : 조건
 *  Problem : 14681
 */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];
rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {
    const [x, y] = input;
    if (+x > 0 && +y > 0) {
        console.log('1');
    } else if (+x > 0 && +y < 0) {
        console.log('4');
    } else if (+x < 0 && +y > 0) {
        console.log('2');
    } else {
        console.log('3');
    }
    process.exit();
});
