//**circular queue */

// class CircularQueue{
//     constructor(capacity){
//         this.queue = new Array(capacity)
//         this.size = 0
//         this.capacity = capacity
//         this.front = 0
//         this.rear = 0

//     }

//     isEmpty(){
//         return this.size === 0
//     }

//     isFull(){
//         return this.size === this.capacity
//     }

//     enqueue(value){
//         if(this.isFull()){
//             return 'queue is full'
//         }
//         this.queue[this.rear] = value
//         this.rear = (this.rear + 1) % this.capacity
//         this.size++
//     }

//     dequeue(){
//         if(this.isEmpty()){
//             return null
//         }

//         const remove = this.queue[this.front]
//         this.queue[this.front] = null
//         this.front = (this.front + 1) % this.capacity
//         this.size --
//     }

//     peek(){
//         if(this.isEmpty()){
//             return null
//         }

//         return this.queue[this.front]
//     }

//     print(){
//         let result = []
//         for(let i=0 ; i<this.size ; i++){
//             result.push(this.queue[(this.front + i)%this.capacity])
//         }
//         console.log(result.join('->'));
        
//     }
// }

// const circle = new CircularQueue(5)
// circle.enqueue(59);
// circle.enqueue(10);
// circle.enqueue(48);

// circle.print();
// circle.dequeue();
// circle.enqueue(77);
// circle.enqueue(88);
// circle.enqueue(99); 
// circle.print();


class CircularQueue{
    constructor(capacity){
        this.queue = new Array(capacity)
        this.size = 0
        this.capacity = capacity
        this.front = 0
        this.rear = 0
    }

    isEmpty(){
        return this.size === 0
    }

    isFull(){
        return this.size === this.capacity
    }

    enqueue(value){

        if(this.isFull()){
            return 'queue is full'
        }
        this.queue[this.rear] = value
        this.rear = (this.rear + 1) % this.capacity
        this.size++
    }

    dequeue(){
        if(this.isEmpty()){
            return null
        }
        const remove = this.queue[this.front]
        this.queue[this.front] = null
        this.front = (this.front + 1) % this.capacity 
        this.size --
    }

    peek(){
        if(this.isEmpty()){
            return null
        }
        return this.queue[this.front]
    }

    print(){
        let result = []
        for(let i=0;i<this.size;i++){
            result.push(this.queue[(this.front + i) % this.capacity])
        }
        console.log(result.join('<-'));
        
    }


}

const c = new CircularQueue(5)
c.enqueue(10)
c.enqueue(40)
console.log(c.peek());
c.dequeue()
console.log(c.peek());

c.print()