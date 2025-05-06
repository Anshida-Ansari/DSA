//**week 2 practicles */

//**reverse a string with stack */

 function reverce(str){
    let stack = []

    for(let char of str){
        stack.push(char)
    }

    let reverced = ''

    while(stack.length !==0){
        reverced += stack.pop()
    }
    return reverced
 }

 console.log(reverce('anshida'));


 //**circular queue */

class circularQueue{
    constructor(capacity){

        this.queue = []
        this.capacity = capacity
        this.size = 0
        this.front = 0
        this.rear = 0

    }

    enqueue(element){
        this.queue[this.rear] = element
        this.rear = (this.rear+1) % this.capacity
        this.size++
    }

    dequeue(){
        let removed = this.queue[this.front]
        this.queue[this.front] = null
        this.front = (this.front+1 % this.capacity)
        this.size--
        return removed
    }

    peek(){
        return this.queue[this.front]
    }

    print(){
        let result = []
        for(let i=0 ; i<this.size;i++){
            result.push(this.queue[(this.front+i)%this.capacity])
        }

        console.log(result.join('->'));
        
    
    }



}

const queue = new circularQueue(5)
queue.enqueue(50)
queue.enqueue(90)
queue.dequeue()
console.log(queue.peek());

queue.print()


//**print nonrepeting character */
function nonRepeating(str){
    
   let freq = {}
   let unique = []

   for(let char of str){
    freq[char] = (freq[char] || 0) +1
    if(freq[char] === 1){
        unique.push(char)
       }
   }

   for(let char of unique){
    if(freq[char] === 1){
        return char
    }
   }



}

console.log(nonRepeating('swiss'));


//**merge two soted array */

function merge(arr1,arr2){
    let result = []
    let i = 0
    let j = 0

    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<arr2[j]){
            result.push(arr1.shift())
            i++

        }else{
            result.push(arr2.shift())
            j++
        }
    }

    while(i<arr1.length){
        result.push(arr1[i])
        i++
    }
    while(j<arr2.length){
        result.push(arr2[j])
        j++
    }

    return [...result,...arr1,...arr2]
}

let arr1 = [5, 8, 12]
let arr2 = [3, 6, 9, 15]

console.log(merge(arr1,arr2));

//**sort the array with quickSort */

function quickSort(arr){
    if(arr.length<2){
        return arr
    }

    let pivot = arr[arr.length-1]
    let left = []
    let right = []

    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
return [...quickSort(left),pivot,...quickSort(right)]


}

let array = ["apple", "orange", "banana", "grape", "kiwi"]

console.log(quickSort(array));

