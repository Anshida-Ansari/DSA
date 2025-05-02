//**min heap */

class MinHeap{
    constructor(){
        this.heap = []
    }

    insert(value){
        this.heap.push(value)
        this.heapifyUp()
    }
    heapifyUp(){
        let index = this.heap.length - 1
        while(index>0){
            let parentIndex = Math.floor((index -1)/2)

           if(this.heap[parentIndex]<this.heap[index]) break

          [ this.heap[parentIndex],this.heap[index] ]= [this.heap[index],this.heap[parentIndex]]
          
          index = parentIndex
        }
    }

    extractMin(){
        if(this.heap.length === 0)return null
        if(this.heap.length === 1)return this.heap.pop

        let min = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown(0)

        return min
    }
    heapifyDown(index){
        let length = this.heap.length
        let smallest = index
        let right = 2*index +1
        let left = 2*index +2


        if(left<length && this.heap[left]<this.heap[smallest]){
            smallest = left
        }

        if(right<length && this.heap[right]<this.heap[smallest]){
            smallest = right
        }

        if(smallest !== index){
            [this.heap[smallest],this.heap[index]] = [this.heap[index],this.heap[smallest]]
            this.heapifyDown(smallest)
        }
    }
    print(){
        console.log(this.heap);
        
    }

}

const min = new  MinHeap()
min.insert(10)
min.insert(11)
min.insert(8)
min.insert(1)

min.print()

console.log(min.extractMin());

min.print()



//**max heap */

class Maxheap{
    constructor(){
        this.heap = []

    }

    insert(value){
        this.heap.push(value)
        this.heapifyUp()
    }

    heapifyUp(){
        let index = this.heap.length-1
        while(index > 0){
            let parentIndex = Math.floor((index -1)/2)
            if(this.heap[parentIndex]>=this.heap[index])break

            [this.heap[parentIndex],this.heap[index]] = [this.heap[index],this.heap[parentIndex]]
            index = parentIndex
        }
    }

    extractMax(){
        if(this.heap.length === 0)return null
        if(this.heap.length === 1)return this.heap.pop

        let max = this.heap[0]
        this.heap[0] = this.heap.pop()

        this.heapifyDown(0)

        return max
    }
    heapifyDown(index){

        let length = this.heap.length
        let left  = 2*index + 1
        let right =  2*index + 2

        let largest = index

        if(left>length && this.heap[left]>this.heap[largest]){
            largest = left
        }
        if(right>length && this.heap[right]>this.heap[largest]){
            largest = right
        }

        if(largest !== index){
            [this.heap[largest],this.heap[smallest]] =  [this.heap[smallest],this.heap[largest]]

            this.heapifyDown(largest)
        }

    }

    print(){
        console.log(this.heap);
        
    }




}

const max = new Maxheap()
max.insert(0)
max.insert(10)
max.insert(20)
max.insert(40)
max.print()

console.log(max.extractMax());
max.print()


