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

  prepend(value) {
    const newNode = { value: value, next: this.head };

    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }
  }

  delete(value) {
    if (!this.head) {
      return;
    }

    while (this.head && this.head.value === value) {
      this.head = this.head.next;
    }

    let curNode = this.head;

    while (curNode.next) {
      if (curNode.next.value === value) {
        curNode.next = curNode.next.next;
      } else {
        curNode = curNode.next;
      }
    }

    if (this.tail.value === value) {
      this.tail = curNode;
    }
  }

  toArray() {
    const elements = [];

    let curNode = this.head;
    while (curNode) {
      elements.push(curNode);
      curNode = curNode.next;
    }

    return elements;
  }
}

const linkedList1 = new LinkedList();
linkedList1.append(1);
linkedList1.append('hello there');
linkedList1.append('Max');
linkedList1.append('Max');
linkedList1.append(true);
linkedList1.append(18.51);
linkedList1.prepend('First value!');
linkedList1.prepend('First value!');

console.log(linkedList1.toArray());

linkedList1.delete('Max');
linkedList1.delete('First value!');
linkedList1.delete(18.51);

console.log(linkedList1.toArray());
