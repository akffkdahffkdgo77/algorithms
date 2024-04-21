/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : 새싹
 *  Type : 입력과 계산
 *  Problem : 11382
 */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (line) {
    const [num1, num2, num3] = line.split(' ');
    console.log(+num1 + +num2 + +num3);
    rl.close();
}).on('close', function () {
    process.exit();
});
