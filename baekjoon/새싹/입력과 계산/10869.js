/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : 새싹
 *  Type : 입력과 계산
 *  Problem : 10869
 */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (line) {
    const [num1, num2] = line.split(' ');
    console.log(+num1 + +num2);
    console.log(+num1 - +num2);
    console.log(+num1 * +num2);
    console.log(parseInt(+num1 / +num2, 10));
    console.log(+num1 % +num2);
    rl.close();
}).on('close', function () {
    process.exit();
});
