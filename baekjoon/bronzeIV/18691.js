/*
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net
 *  Level : Bronze IV
 *  Problem : 18691
 *  Algorithm : Math, Implementation, Arithmetic Operations
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim()
    .split('\n');
input.shift();

// G : 포켓몬 그룹
// C : 캔디 수
// E : 포켓몬 진화에 필요한 캔디 수
input.forEach((val) => {
    // E - C : 필요한 캔디 수
    // 1 / 3 / 5 km : 캔디 1개
    // 5개 캔디가 필요하고 그룹이 3일 경우
    // -> 캔디 1개를 얻기 위해서 5km를 걸음 (5 * 1)
    // -> 캔디 2개를 얻기 위해서 10km를 걸음 (5 * 2)
    const [G, C, E] = val.split(' ').map(Number);
    let km = E - C;
    if (G === 2) {
        km *= 3;
    } else if (G === 3) {
        km *= 5;
    }
    console.log(km <= 0 ? 0 : km);
});
