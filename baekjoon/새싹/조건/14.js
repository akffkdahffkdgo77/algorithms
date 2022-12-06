/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: 새싹
 *  Type : 조건
 *  Problem : 9498
 */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (line) {
    const num = line.split(' ');
    if (+num > 89) {
        console.log('A');
    } else if (+num > 79) {
        console.log('B');
    } else if (+num > 69) {
        console.log('C');
    } else if (+num > 59) {
        console.log('D');
    } else {
        console.log('F');
    }
    rl.close();
}).on('close', function () {
    process.exit();
});
