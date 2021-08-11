class LinkedList {

  constructor() {
    this.head = null; // First element of the list
    this.tail = null; // Last element of the list
  }

  append(value) {
    const newNode = { value: value, next: null };

    if (this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    if (!this.head) {
      this.head = newNode;
    }
  }

  toArray() {
    const elements = [];
    let curNode = this.head;
    while (curNode) {
      elements.push(curNode.value);
      curNode = curNode.next;
    }
    return elements;
  }

}

const linkedList1 = new LinkedList();
linkedList1.append(1);
linkedList1.append('hello there');
linkedList1.append('Max');
linkedList1.append(true);
linkedList1.append(18.51);
// linkedList1.prepend('First value!');

console.log(linkedList1.toArray());
