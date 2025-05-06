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


//**week 3 */

class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
        
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null
    }
    isEmpty(){
        return this.root === null
    }

    insert(value){
        let newNode = new Node(value)
        if(this.isEmpty()){
            this.root = newNode

        }else{
            this.insertNode(this.root,newNode)
        }
    }

    insertNode(root,newNode){
        if(newNode.value<root.value){
            if(root.left === null){
                root.left = newNode
            }else{
                this.insertNode(root.left,newNode)
            }
        }else{
            if(root.right === null){
                root.right = newNode
            }else{
                this.insertNode(root.right,newNode)
            }
        }
    }

    search(root,value){
        if(!root){
            return false
        }else{
            if(value === root.value){
                return true

            }
            else if(value < root.value){
               return this.search(root.left,value)
            }else{
                return this.search(root.right,value)
            }
        }
    }
    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value);
            this.inOrder(root.right)

            
        }
    }

    preOrder(root){
        if(root){
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
            
        }

    }

    postOrder(root){
        if(root){
            this.postOrder(root.value)
            this.postOrder(root.left)
            console.log(root.value);
            
        }
    }

    min(root){
        if(!root.left){
            return root.value
        }else{
            return this.min(root.left)
        }
    }

    max(root){
        if(!root.right){
            return root.value
        }else{
            return this.max(root.right)
        }
    }

    levelOrder(){
        let q = []
        q.push(this.root)

        while(q.length){
            let curr = q.shift()
            console.log(curr.value);


            if(curr.left){
                q.push(curr.left)
            }

            if(curr.right){
                q.push(curr.right)
            }
            
        }
    }

    delete(value){
        this.root = this.deleteValue(this.root,value)
    }

    deleteValue(root,value){
        if(root === null){
            return null
        }else{
            if(value<root.left){
                root.left = this.deleteValue(root.left,value)
            }else if(value > root.right){
                root.right = this.deleteValue(root.right,value)
            }else{
                if(!root.left && root.right){
                    return null

                }

                if(!root.left){
                    return root.right
                }

                else if(!root.right){
                    return root.right
                }

                root.value = this.min(root.right)
                root.right = this.delete(root.right,root.value)
            }

            return root
        }
    }
}


const bst = new BinarySearchTree()
bst.insert(90)
bst.insert(10)
bst.insert(89)

console.log(bst.search(bst.root,90));

bst.levelOrder()


