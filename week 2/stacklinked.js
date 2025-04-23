class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Stack{
    constructor(){
        this.top = null
        
    }
    push(value){

        const newNode = new Node(value)
        newNode.next= this.top
        this.top = newNode
    }
    pop(){
        if(this.top === null){
            return 'underflow'
        }

        const popped = this.top
        this.top = this.top.next

        return popped.value

    }
    peek(){
        if(this.top === null ){
            return null
        }
    
        return this.top.value
    }

    isEmpty(){
        return this.top === null
    }

    print(){
        let curr = this.top;
        let values = '';
        while(curr){
            values += curr.value + ' -> '
            curr = curr.next;
        }
        values += 'null'; 
        console.log(values);
    }
    

}

const s = new Stack();
s.push(10);
s.push(20);
s.push(30);
s.print(); // 30 -> 20 -> 10 -> null

console.log("Popped:", s.pop()); // 30
console.log("Peek:", s.peek());  // 20