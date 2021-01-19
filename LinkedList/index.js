class Node {
  constructor (data) {
    this.data = data
    this.pointer = null
  }
}

class LinkedList {

  constructor () {
    this.head = null
  }

  insert(data) {
    const node = new Node(data)

    if(!this.head) {
      this.head = node
    }
    else {
      let tail = this.head
  
      while (tail.pointer) {
        tail = tail.pointer
      }
  
      tail.pointer = node
    }
  }

  prepend (data) {
    const node = new Node(data)

    if(!this.head) {
      this.head = node
      return
    }
    
      let tail = this.head
      this.head = node
      this.head.pointer = tail
  }

  size () {
    let i = 1
    while (this.head.pointer) {
      i++
      this.head.pointer = this.head.pointer.pointer
    }
    return i
    // console.log(i);
  }

}

const ll = new LinkedList()

ll.prepend("A")
ll.prepend("B")
ll.prepend("C")
ll.prepend("D")


console.log(ll.size());