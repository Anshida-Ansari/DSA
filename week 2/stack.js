// //**stack using array */


class Stack {
    constructor(){
        this.stack = []
    }
    push(element){
        this.stack.push(element)
    }

    pop(){
        if(this.isEmpty()){
            return 'stack underflow'
        }

        return  this.stack.pop()
    }

    peek(){
        return this.stack[this.stack.length-1]
    }
    isEmpty(){
        return this.stack.length === 0
    }
    size(){
        return this.stack.length
    }
    print(){
        console.log(this.stack.join('<-'));
        
    }
    
}

const s = new Stack()
console.log(s.isEmpty());


s.push(49)
s.push(59)
s.push(39)
s.push(19)
s.push(89)
s.print()

console.log(s.size());
console.log(s.isEmpty());
console.log(s.peek());
s.pop()
s.print()
console.log(s.pop());



//**stack using linked list */


// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }


// class Stack {
//     constructor(){
//         this.top = null
//         this.length = 0
//     }

//     push(value){
//         const newNode = new Node(value)
//         newNode.next = this.top
//         this.top = newNode
//         this.length++
//     }
//     pop(){
//         if(this.isEmpty()){
//             return 'stack is underflow'
//         }
//         const popped = this.top
//         this.top = this.top.next
//         this.length--
//         return popped.value
//     }
//     peek(){
//         return this.top.value
//     }

//     isEmpty(){
//         return this.length === 0
//     }

//     size(){
//         return this.length
//     }

//     print(){
//         let curr = this.top
//         let values = ''
//         while(curr){
//             values += curr.value+ " <- "
//             curr = curr.next
//         }
//         console.log(values + ' null');
        
//     }
// }



// const s = new Stack()

// s.push(89)
// s.push(89)
// s.push(89)
// console.log(s.isEmpty());
// console.log(s.size());


// s.print()


//**stack reverse */


function reverese(string){
    let stack = new Stack()

    for(let char of string){
        stack.push(char)
    }

    let reveresed = ''
    while(!stack.isEmpty()){
        reveresed += stack.pop()
    }

    return reveresed
    
}


console.log(reverese('anshida'));


function isValidParentheses(str){

    let stack =[]
    let map ={
        '}':'{',
        ']':'[',
        ')':'('
    }

    for(let char of str){
        if(char === '[' || char === '{' || char === '('){
            stack.push(char)
        
        }else{
            if(stack.pop()!== map[char]){
                return false
            }
            
        }

    }
    return true
}


console.log(isValidParentheses('{}}{'));
console.log(isValidParentheses('{}'));
console.log(isValidParentheses('{}}{'));


// **stack using queue */
// *******using two queue */

// class stackQueue{
//     constructor(){
//         this.q1 = []
//         this.q2 = []


//     }

//     push(x){
//         this.q2.push(x)
//         while(this.q1.length>0){
//             this.q2.push(this.q1.shift())


//         }
//         [this.q1 , this.q2] = [this.q2 , this.q1]
//     }

//     pop(){
//         return this.q1.shift()
//     }
//     print() {
//         console.log(this.q1.slice().reverse().join(" -> "));
//     }
// }

// const queue = new stackQueue()
// queue.push(89)
// queue.push(9)
// queue.push(8)

// console.log(queue.pop());

// queue.print()


class stackQueue{
    constructor(){
        this.q1 = []
        this.q2 = []
    }

    push(x){
        this.q2.push(x)
        while(this.q1.length>0){
            this.q2.push(this.q1.shift())
        }
        [this.q1,this.q2] = [this.q2,this.q1]
        
    }

    pop(){
        return this.q1.shift()
    }
    top(){
        return this.q1[0]

    }

    isEmpty(){
        return this.q1.length ===0
    }
    print(){
        console.log(this.q1.slice().join('->'));
        
    }
    
}

const q = new stackQueue()
q.push(10)
q.push(89)
q.push(900)
q.pop()
q.print()


//**stack using 1 queue */

class oneStackQueue{
    constructor(){
        this.q = []
    }

    push(x){
        this.q.push(x)
        for(let i=0;i<this.q.length-1;i++){
            this.q.push(this.q.shift())
        }
    }

    pop(){
        return this.q.shift()

    }
    top(){
        return this.q[0]
    }
    print(){
        console.log(this.q.join('->'));
        
    }
}

const sq = new oneStackQueue()

sq.push(1)
sq.push(2)
sq.push(3)

console.log(sq.top());


sq.print()

