/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : Bronze V
 *  Problem : 27889
 *  Algorithm : Implementation, String
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
    .toString()
    .trim();

const obj = {
    NLCS: 'North London Collegiate School',
    BHA: 'Branksome Hall Asia',
    KIS: 'Korea International School',
    SJA: 'St. Johnsbury Academy'
};

console.log(obj[input]);
