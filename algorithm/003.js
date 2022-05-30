// step 4 toString 구현

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    let init = new Node("init");
    this.head = init;
    this.tail = init;

    this.데이터수 = 0;
    // this.데이터들 = "";
  }

  length() {
    return this.데이터수;
  }

  toString() {
    // return 'hello world'
    // return '[1, 2, 3, 10, 20, 30]'

    // 아래와 같이 구현했을 때 삭제가 문제가 됩니다.
    // return "[" + this.데이터들.slice(0, -2) + "]";

    let 순회용현재노드 = this.head;
    순회용현재노드 = 순회용현재노드.next;

    데이터들 = ''
    for (let i = 0; i < this.데이터수; i ++) {
            데이터들 += `${순회용현재노드.data}, `
            순회용 현재노드 = 순회용현재노드.next
    }
    return "[" + this.데이터들.slice(0, -2) + "]";
  }

  append(data) {
    let 새로운노드 = new Node(data);
    this.tail.next = 새로운노드;
    this.tail = 새로운노드;

    this.데이터수 += 1;
    this.데이터들 += `${data}, `;
  }
}

l = new LinkedList();
l.append(1);
l.append(2);
l.append(3);
l.append(10);
l.append(20);
l.append(30);
l.length();
l.toString();
