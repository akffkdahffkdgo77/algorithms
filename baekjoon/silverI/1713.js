/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : Silver I
 *  Problem : 1713
 *  Algorithm : 구현, 시뮬레이션
 */

const [N, R, input] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .split('\n');

const recommendations = input.split(' ').map(Number);

const map = new Map();
for (let i = 0; i < Number(R); i++) {
    if (map.size < Number(N)) {
        map.set(recommendations[i], map.get(recommendations[i]) ? map.get(recommendations[i]) + 1 : 1);
    } else if (map.get(recommendations[i])) {
        map.set(recommendations[i], map.get(recommendations[i]) + 1);
    } else {
        const keys = [...map.keys()];
        const smallest = Math.min(...map.values());

        for (let j = 0; j < Number(N); j++) {
            if (map.get(keys[j]) === smallest) {
                map.delete(keys[j]);
                map.set(recommendations[i], 1);
                break;
            }
        }
    }
}

console.log([...map.keys()].sort((a, b) => a - b).join(' '));
