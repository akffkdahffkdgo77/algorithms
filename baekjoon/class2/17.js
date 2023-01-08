/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: CLASS 2
 *  Problem : 10845
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n');

// FIFO
const arr = [];
let answer = '';

input.shift();
input.forEach((row) => {
    const [command, val] = row.split(' ');
    switch (command) {
        case 'push':
            arr.push(val);
            break;
        case 'pop':
            answer += `${arr.shift() || -1}\n`;
            break;
        case 'size':
            answer += `${arr.length}\n`;
            break;
        case 'empty':
            answer += `${arr.length ? 0 : 1}\n`;
            break;
        case 'front':
            answer += `${arr[0] || -1}\n`;
            break;
        case 'back':
            answer += `${arr[arr.length - 1] || -1}\n`;
            break;
        default:
            break;
    }
});

console.log(answer.trim());
