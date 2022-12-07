/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: 새싹
 *  Type : 조건
 *  Problem : 2753
 */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (line) {
    const num = +line;
    if (num % 4 === 0 && num % 100 !== 0) {
        console.log('1');
    } else if (num % 400 === 0) {
        console.log('1');
    } else {
        console.log('0');
    }
    rl.close();
}).on('close', function () {
    process.exit();
});
