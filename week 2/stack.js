// //**stack using array */


// class Stack {
//     constructor(){
//         this.stack = []
//     }
//     push(element){
//         this.stack.push(element)
//     }

//     pop(){
//         if(this.isEmpty()){
//             return 'stack underflow'
//         }

//         return  this.stack.pop()
//     }

//     peek(){
//         return this.stack[this.stack.length-1]
//     }
//     isEmpty(){
//         return this.stack.length === 0
//     }
//     size(){
//         return this.stack.length
//     }
//     print(){
//         console.log(this.stack.join('<-'));
        
//     }
    
// }

// const s = new Stack()
// console.log(s.isEmpty());


// s.push(49)
// s.push(59)
// s.push(39)
// s.push(19)
// s.push(89)
// s.print()

// console.log(s.size());
// console.log(s.isEmpty());
// console.log(s.peek());
// s.pop()
// s.print()
// console.log(s.pop());



//**stack using linked list */


class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}


class Stack {
    constructor(){
        this.top = null
        this.length = 0
    }

    push(value){
        const newNode = new Node(value)
        newNode.next = this.top
        this.top = newNode
        this.length++
    }
    pop(){
        if(this.isEmpty()){
            return 'stack is underflow'
        }
        const popped = this.top
        this.top = this.top.next
        this.length--
        return popped.value
    }
    peek(){
        return this.top.value
    }

    isEmpty(){
        return this.length === 0
    }

    size(){
        return this.length
    }

    print(){
        let curr = this.top
        let values = ''
        while(curr){
            values += curr.value+ " <- "
            curr = curr.next
        }
        console.log(values + ' null');
        
    }
}



const s = new Stack()

s.push(89)
s.push(89)
s.push(89)
console.log(s.isEmpty());
console.log(s.size());


s.print()
