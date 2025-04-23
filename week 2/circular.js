class CircularQueue{
    constructor(capacity){
        this.items = new Array(capacity)
        this.capacity = capacity
        this.currentLength = 0    
        this.front = -1
        this.rear = -1


    }

   
    isFull(){

        return this.currentLength === this.capacity

    }
    isEmpty(){

        return this.currentLength === 0

    }
    enqueue(element){

        if(!this.isFull){
            this.rear = this.rear+1
            this.items[this.rear] = element
            this.currentLength +=1
            if(this.front === -1){
                this.front = this.rear
            }
        }
        

    }
    dequeue(){
        if(this.isEmpty()){
            return null
        }
        
        const item = this.items[this.front]
        this.items[this.front] = null
        this.front=(this.front +1)% this.capacity
        this.currentLength -= 1

        if(this.isEmpty()){
            this.front  = -1
            this.rear = -1
        }

        return item



    }
    peek(){
        if(!this.isEmpty()){
            return this.items[this.front]
        }

    }
   
 
}

const queue = new CircularQueue