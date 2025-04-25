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



// class Queue {
//     constructor(){
//         this.items = {}
//         this.head = 0
//         this.tail = 0

//     }

//     enqueue(elements){
//         this.items[this.tail] = elements
//         this.tail++

//     }
//     dequeue(){
//         const item = this.items[this.head]
//         delete this.items[this.head]
//         this.head++
//     }

//     isEmpty(){
//         return this.tail - this.head === 0
//     }

//     size(){
//         return this.tail - this.head
//     }

//     peek(){

//         return this.items[this.head]

//     }
//     print(){
//         console.log(this.items);
        
//     }
// }


// const q = new Queue()

// q.enqueue(19)
// q.enqueue(45)
// q.enqueue(59)

// q.print()

// console.log(q.peek());


// q.dequeue()
// q.print()

// **queue implemented using array */

    class queue{
        constructor(){
            this.item = []      
        }

        enqueue(element){
            this.item.push(element)
        }

        dequeue(){
            this.item.shift()
        }

        peek(){
            return this.item[0]
        }

        size(){
            return this.item.length
        }
        isEmpty(){
            return this.item.length === 0
        }
        print(){
            console.log(this.item.toString());
            
        }
    }

    const q = new queue()

    q.enqueue(89)
    q.enqueue(19)
    console.log(q.isEmpty());
    console.log(q.size());
    console.log(q.peek());



    q.print()

//**queue with object */

class Queue{
    constructor(){
        this.item = {}
        this.head = 0
        this.tail = 0

    }

    enqueue(element){
        this.item[this.tail] = element
        this.tail++
    }
    dequeue(){
        const items = this.item[this.head]
        delete this.item[this.head]
        this.head--
    }
    peek(){
        return this.item[this.head]
    }
    size(){
        return  this.tail - this.head
    }
    isEmpty(){
        return this.size() === 0
    }
    print(){
        console.log(this.item);
        
    }
}

const qu = new Queue()
qu.enqueue(87)
qu.enqueue(65)
qu.enqueue(56)
qu.dequeue()
console.log(qu.size());

console.log(qu.isEmpty());

qu.print()



//**Double ended queue */

class deque {
    constructor(){
        this.item = []
    }

    isEmpty(){
        return this.item === 0

    }

    size(){
        return this.item.length
    }

    addrear(value){
        if(this.isEmpty())return 'queue is empty '

        this.item.push(value)
    }
    addFront(value){
        if(this.isEmpty())return 'queue is empty '
        this.item.unshift(value)


    }
    removeFront(){
        if(this.isEmpty())return 'queue is empty '
        this.item.shift()


    }
    removeRear(){
        if(this.isEmpty())return 'queue is empty'
        this.item.pop()
    }

    peekRear(){
        if(this.isEmpty())return 'queue is empty'
        this.item[this.item.length-1]


    }
    peekFront(){
        if(this.isEmpty())return 'queue is empty'
        this.item[0]


    }
    print(){
        console.log(this.item.join('->'));
        
    }
}

const de = new deque()
de.addFront(78)
de.addFront(70)
de.addFront(10)
de.addrear(55)
de.addFront(100)
de.print()


//**queue using stack */


class QueueStack{
    constructor(){
        this.s1 = []
        this.s2 = []
    }

    enqueue(x){
        this.s2.push(x)
    }

    dequeue(){
        if(this.s2 === 0){
            while(this.s1>0){
                this.s2.push(this.s1.pop)
            }
        }
        return this.s2.pop()
    }
    peek(){
        if(this.s2 === 0){
            while(this.s1>0){
                this.s2.push(this.s1.pop)
            }
        }
        return this.s2[this.s2.length-1]

    }
    print() {
        const frontPart = [...this.s2].reverse(); 
        const backPart = [...this.s1];            
        const fullQueue = frontPart.concat(backPart); 
        console.log(fullQueue.join(" -> "));
    }
}    

const qs = new QueueStack()
qs.enqueue(10)
qs.enqueue(18)
qs.print()