class LinkedList{
    constructor(value){
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }
    append(value){
        const newNode = {
            value: value,
            next: null
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    prepend(value){
        const newNode = {
            value: value,
            next: null
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
    printList(){
        const array=[]
        let currentNode=this.head
        while(currentNode !==null){
            array.push(currentNode.value)
            currentNode=currentNode.next
        }
        return array
    }
    insert(index,value){
        if (index>=this.length){
            this.append(value)
        }
        const newNode={
            value:value,
            next:null
        }
        const leader=this.teverseToIndex(index-1)
        const holdingpointer=leader.next
        leader.next=newNode
        newNode.next=holdingpointer
        this.length++
        return this.printList()

    }
    teverseToIndex(index){
        let counter=0
        let currentNode=this.head
        while(counter!==index){
            currentNode=currentNode.next
            counter++
        }
        return currentNode
    }
}
const myLinkedList = new LinkedList(10)
myLinkedList.append(5)
myLinkedList.prepend(16)
myLinkedList.insert(1,4)
console.log(myLinkedList.printList())