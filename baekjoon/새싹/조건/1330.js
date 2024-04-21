/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : 새싹
 *  Type : 조건
 *  Problem : 1330
 */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (line) {
    const [num1, num2] = line.split(' ');
    console.log(+num1 > +num2 ? '>' : +num1 < +num2 ? '<' : '==');
    rl.close();
}).on('close', function () {
    process.exit();
});
