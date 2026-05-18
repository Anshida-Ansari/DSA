// function reverce(str){
//     let stack =[]
//     for(let char of str){
//         stack.push(char)
//     }

//     let reveresed = ''

//     while(stack.length !==0){
//         reveresed+=stack.pop()
//     }

//     return reveresed
// }

// console.log(reverce('anshida'));


// function nonRepeating(str){
//     let freq = {}
//     let unique = []

//     for(let char of str){
//         freq[char] = (freq[char] || 0)+1

//         if(freq[char] === 1){
//             unique.push(char)
           
//         }
        
//     }
//     for(let char of unique){
//         if(freq[char]===1){
//             return char
//         }
//     }
// }

// console.log(nonRepeating('swiss'));


// function merge(arr1,arr2){
//     let result = []
//     let i = 0
//     let j = 0
    
//     while(i<arr1.length && j<arr2.length){
//         if(arr1[i]<arr2[j]){
//             result.push(arr1[i])
//             i++
//         }else{
//             result.push(arr2[j])
//             j++
//         }
//     }
    
    
//     while(i<arr1.length){
//         result.push(arr1[i])
//         i++
//     }
//     while(j<arr2.length){
//         result.push(arr2[j])
//         j++
//     }
// return result    
// }

// console.log(merge([1,2,3,4],[7,8,9]))

// function merge(arr){
//     if(arr.length<2){
//         return arr
//     }
    
//     let mid = Math.floor(arr.length/2)
//     let arr1 = arr.slice(0,mid)
//     let arr2 = arr.slice(mid)
    
//     return mergeArray(merge(arr1),merge(arr2))
// }


// function mergeArray(arr1,arr2){
//     let result = []
    
    
//     while(arr1.length && arr2.length){
//         if(arr1[0]<=arr2[0]){
//             result.push(arr1.shift())
//         }else{
//             result.push(arr2.shift())
//         }
//     }
    
//     return [...result,...arr1,...arr2]
// }

// console.log(merge([9,8,3,1,5,10]))

   

// function quickSort(arr){
//     if(arr.length<2){
//         return arr
//     }
    
//     let pivot = arr[arr.length-1]
//     let left = []
//     let right = []
    
//     for(let i = 0;i<arr.length-1;i++){
//         if(arr[i]<pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return [...quickSort(left),pivot,...quickSort(right)]
// }


// console.log(quickSort([5,2,8,34,23,9]))


// function countDown(n){
//     if(n<=0){
//         console.log('done')
//         return 
//     }
    
//     console.log(n)
//     countDown(n-1)
// }

// countDown(10)


// function sortStack(stack){

// }


// let stack = [34, 3, 31, 98, 92, 23];

// let tempArray = []

// while(stack.length>0){
//      tempArray.push(stack.pop())
// }

// tempArray.sort((a,b)=>a-b)

// for(let i=0 ; i<tempArray.length;i++){
//     stack.push(tempArray[i])
// }

// console.log(stack)

// function SortStack(stack){
    
//     let tempArray = []
    
//     while(stack.length>0){
        
//         tempArray.push(stack.pop())
        
//     }
    
//     tempArray.sort((a,b)=>a-b)
    
//     for(let i=0;i<tempArray.length;i++){
//         stack.push(tempArray[i])
//     }
    
//     return stack
    
    
// }

// console.log(SortStack([6,4,1,9,5]))


// class Graph {
//     constructor() {
//         this.adjacencyList = {};
//     }

//     addVertex(vertex) {
//         if (!this.adjacencyList[vertex]) {
//             this.adjacencyList[vertex] = new Set();
//         }
//     }

//     addEdge(vertex1, vertex2) {
//         if (!this.adjacencyList[vertex1]) this.addVertex(vertex1);
//         if (!this.adjacencyList[vertex2]) this.addVertex(vertex2);
//         this.adjacencyList[vertex1].add(vertex2);
//         this.adjacencyList[vertex2].add(vertex1);
//     }

//     display() {
//         for (let vertex in this.adjacencyList) {
//             console.log(vertex, "->", [...this.adjacencyList[vertex]]);
//         }
//     }
    
//     bfs(start){
//     let queue = []
//     let visited = new Set()
//     let distance = {}

//     visited.add(start)
//     queue.push(start)
//     distance[start] = 0

//     while(queue.length > 0){
//         let node = queue.shift()
//         console.log(node, 'start from', start, '=', distance[node])

//         for(let neighbour of this.adjacencyList[node]){
//             if(!visited.has(neighbour)){
//                 visited.add(neighbour)
//                 queue.push(neighbour)
//                 distance[neighbour] = distance[node] + 1
//             }
//         }
//     }

//     return distance
// }

// }

// const graph = new Graph();
// graph.addVertex('A');
// graph.addVertex('B');
// graph.addVertex('C');
// graph.addVertex('D');

// graph.addEdge('A', 'B');
// graph.addEdge('B', 'C');
// graph.addEdge('C', 'D');
// graph.addEdge('A', 'C');

// graph.display();
// console.log('anshida')
// graph.bfs('A')

// let arr = [2, 4, 6, 2, 3, 4, 7, 6, 8];

// let seen = new Set()

// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2 === 0){
//         if(seen.has(arr[i])){
//             arr.splice(i,1)
//             i--
//         }else{
//             seen.add(arr[i])
//         }
//     }
// }

// console.log(arr)

// function deepFreeze(obj){
//     Object.freeze(obj)
    
//     for(let key in obj){
//         if(typeof obj[key]=== 'object'&& obj[key] !== null){
//             deepFreeze(obj[key])
//         }
//     }
// }



// const obj = {
//     name:'anshida',
//     place:{
//         city:'palakkad'
//     }
// }
// // Object.freeze(obj)
// deepFreeze(obj)
// obj.place.city = 'france'
// obj.name = 'lena'
// console.log(obj);

// const express = require('express')
// const app = express()
// const PORT = 2000

// app.use(express.json())

// app.use((req,res,next)=>{
//     if( req.method === 'POST' ){
//     const origin = req.get('Origin') || ''
//     if(origin.includes('baddomain')){
//         return res.status(403).json({message:'Domain is blocked'})
//     }
// }
// next()

// })

// app.post('/submit',(req,res)=>{
//     res.json({message:'Post is accepted'})
// })

// app.listen(PORT,()=>{

//     console.log('server is running ');
    

// })


// const express = require('express');
// const app = express();
// const PORT = 3000;


// app.use((req,res,next)=>{
//     const params = Object.keys(req.params)
//     if(params.length>0){
//         console.log('params are',params)
//     }

//     next()
// })
// app.get('/users/:id/books/:bookId', (req, res) => {
//     res.send(`User ID: ${req.params.id}, Book ID: ${req.params.bookId}`);
// });

// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });

class Node{
    constructor(value){

        this.value = value
        this.next = null

    }
}

class Linkedlist{
    constructor(){
        this.head = null
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }
    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            
            this.head = node
            node.next = this.head

        }

        this.size++

    }
    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            let prev = this.head
            while(prev.next){

                prev = prev.next

            }
            prev.next = node
        }
        this.size++
    }
    print(){
        let values = ''
        let curr = this.head

        while(curr){
            values += `${curr.value}`
            curr = curr.next
            
        }
        console.log(values);
        
    }


}

const ls = new Linkedlist()

console.log(ls.isEmpty());
ls.prepend(78)
ls.print()
console.log(ls.isEmpty());
