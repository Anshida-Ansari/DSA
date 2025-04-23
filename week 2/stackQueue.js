class StackQueue{
    constructor(){
        this.queue = []
    }

    push(x){
        this.queue.push(x)
        let size = this.queue.length
        if(size>1){
            this.queue.push(this.queue.shift())
            size--
        }
    }
    pop(){
        if(this.queue.length === 0){
            return 'stack is underflow'

            
        }
        return this.queue.shift()

    }


    top(){
        if(this.queue.length === 0){
            return 'queue is empty'
        }

        return this.queue[0]
    }
    isEmpty(){
        return this.queue.length === 0
    }

    print(){
        console.log('stack:',this.queue.join(' '));
        
    }
}

const stack = new StackQueue()
stack.push(90)
stack.push(40)
stack.push(59)
stack.pop()
stack.print()