/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : 새싹
 *  Type : 출력
 *  Problem : 10699
 */

const date = new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' }).split('. ');
console.log(`${date[0]}-${+date[1] < 10 ? '0' + date[1] : date[1]}-${+date[2] < 10 ? '0' + date[2] : date[2]}`);
