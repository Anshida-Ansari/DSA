// class queue{
//     constructor(){
//         this.items = []
//     }

//     enqueue(elements){
//         this.items.push(elements)
//     }

//     dequeue(){
//        return  this.items.shift()
//     }

//     isEmpty(){
//         return this.items.length === 0
//     }

//     peek(){
//         if(!this.isEmpty){
//             return this.items[0]
//         }

//         return null
//     }

// }


// class Queue{
//     constructor(){
//         this.items = []

//     }

//     enqueue(elements){

//         this.items.push(elements)
//     }

//     dequeue(){
//        return this.items.shift()
//     }

//     isEmpty(){
//         return this.items.length === 0
//     }

//     peek(){
//         if(this.isEmpty){
//             return this.items[0]
//         }
//         return null
//     }

//     size(){
//         return this.items.length
//     }

//     print(){
//         console.log(this.items.toString());
        
//     }
// }

// const queue = new Queue()

// queue.enqueue(50)
// queue.enqueue(60)
// queue.enqueue(70)
// queue.enqueue(20)
// queue.enqueue(10)
// console.log(queue.size());
// queue.print()


// console.log(queue.peek());



class Queue {
    constructor(){
        this.items = {}
        this.head = 0
        this.tail = 0

    }

    enqueue(elements){
        this.items[this.tail] = elements
        this.tail++

    }
    dequeue(){
        const item = this.items[this.head]
        delete this.items[this.head]
        this.head++
    }

    isEmpty(){
        return this.tail - this.head === 0
    }

    size(){
        return this.tail - this.head
    }

    peek(){

        return this.items[this.head]

    }
    print(){
        console.log(this.items);
        
    }
}


const q = new Queue()

q.enqueue(19)
q.enqueue(45)
q.enqueue(59)

q.print()

console.log(q.peek());


q.dequeue()
q.print()

