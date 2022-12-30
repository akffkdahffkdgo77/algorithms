/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level: CLASS 3
 *  Problem : 5430
 */

const [N, ...input] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n');

for (let i = 0; i < N; i++) {
    let [func, n, arr] = [
        input[3 * i].split(''),
        Number(input[3 * i + 1]),
        input[3 * i + 2].slice(1, input[3 * i + 2].length - 1).split(',')
    ];

    if (n === 0) {
        arr = [];
    }

    let [isReverse, isEmpty, startIndex] = [false, false, 0];
    func.forEach((ele) => {
        // R
        if (ele === 'R') {
            isReverse = !isReverse;
            // D -> error case
        } else if (ele === 'D' && (startIndex >= arr.length || arr.length < 1)) {
            isEmpty = true;
        } else {
            // last element
            if (isReverse) {
                arr.pop();
            } else {
                // first element
                startIndex++;
            }
        }
    });

    arr = arr.slice(startIndex, arr.length);
    if (isEmpty) {
        console.log('error');
    } else if (isReverse) {
        console.log(`[${arr.reverse()}]`);
    } else {
        console.log(`[${arr}]`);
    }
}
