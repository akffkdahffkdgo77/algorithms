/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: Bronze V
 *  Problem : 16099
 */

// fs -> 런타임 에러 (EACCES)
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {
    let [N, ...rest] = input;
    let answer = '';
    rest.forEach((row, i) => {
        if (i < Number(N)) {
            const [LT, WT, LE, WE] = row.split(' ').map(BigInt);
            answer += `${LT * WT > LE * WE ? 'TelecomParisTech' : LT * WT < LE * WE ? 'Eurecom' : 'Tie'} \n`;
        }
    });
    console.log(answer.trim());
    process.exit();
});
