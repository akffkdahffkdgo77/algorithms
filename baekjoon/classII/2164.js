/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/
 *  Level : CLASS II (Silver IV)
 *  Problem : 2164
 *  Algorithm : 자료 구조, 큐
 */

const N = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(Number)[0];

// doubly linked list
// in order to iterate backward & forward
class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // head: [0]
    // tail: [length-1]
    append(value) {
        const newNode = new ListNode(value);
        // if head is empty, assign newNode to head
        if (!this.head) {
            this.head = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
        }

        this.tail = newNode;
        this.length++;

        return newNode;
    }

    getHead() {
        return this.head.data;
    }

    deleteHead() {
        this.head = this.head.next;
        this.head.prev = null;
        this.length--;
    }

    size() {
        return this.length;
    }
}

const cards = new LinkedList();

Array.from({ length: N }).forEach((_, i) => cards.append(i + 1));

while (cards.size() > 1) {
    cards.deleteHead();
    cards.append(cards.getHead());
    cards.deleteHead();
}

console.log(cards.getHead());
