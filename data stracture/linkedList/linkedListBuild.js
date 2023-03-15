class LinkedList{
    constructor(value){
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.lenth = 1;
    }
    append(value){
        const newNode = {
            value: value,
            next: null
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.lenth++;
        return this;
    }
    prepend(value){
        const newNode = {
            value: value,
            next: null
        }
        newNode.next = this.head;
        this.head = newNode;
        this.lenth++;
        return this;
    }
}
const myLinkedList = new LinkedList(10)
myLinkedList.append(5)
myLinkedList.prepend(16)
console.log(myLinkedList)