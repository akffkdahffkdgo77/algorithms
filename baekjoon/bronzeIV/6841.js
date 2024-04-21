/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : Bronze IV
 *  Problem : 6841
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n');

let answer = '';
input.forEach((val) => {
    switch (val) {
        case 'CU':
            answer += 'see you\n';
            break;
        case ':-)':
            answer += 'I’m happy\n';
            break;
        case ':-(':
            answer += 'I’m unhappy\n';
            break;
        case ';-)':
            answer += 'wink\n';
            break;
        case ':-P':
            answer += 'stick out my tongue\n';
            break;
        case '(~.~)':
            answer += 'sleepy\n';
            break;
        case 'TA':
            answer += 'totally awesome\n';
            break;
        case 'CCC':
            answer += 'Canadian Computing Competition\n';
            break;
        case 'CUZ':
            answer += 'because\n';
            break;
        case 'TY':
            answer += 'thank-you\n';
            break;
        case 'YW':
            answer += 'you’re welcome\n';
            break;
        case 'TTYL':
            answer += 'talk to you later\n';
            break;
        default:
            answer += `${val}\n`;
            break;
    }
});

console.log(answer.trim());
