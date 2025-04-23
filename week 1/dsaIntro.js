// function sum(n){
//     let sum=0
//     for(let i=0;i<=n;i++){
//         sum+=i
//     }
//     return sum 

// }
// console.log(sum(4))

// function present(arr,target){
//     for(let i=0 ; i<=arr.length ; i++){
//         if(arr[i]===target){
//             return 1
//         }
//     }
//     return -1
// }

// console.log(present([1,2,3,4,5,6],1))





//     function secLargest(arr){
//         let largest = Math.max(...arr)
//         let index = arr.indexOf(largest)
//         let newArr = arr.splice(index,1)

//         let secLargest = Math.max(...newArr)
//         return secLargest

//     }

// const result = secLargest([10,20,30,40,50])
// console.log(result);

// function secLargest(arr){
//     let first = -Infinity
//     let second = -Infinity

//     for(let nums of arr){
//         if(nums>first){
//             second = first

//             first = nums
//         }else if(nums>second && nums!==first){
//             second =nums


//         }
//     }
//     return second
// }

// console.log(secLargest([4,3,2,15,3,6,18,19]));



// function fib(n) {

//     let fib=[0,1]
//     for (let i = 2; i < n; i++) {
//         fib[i] = fib[i-1] + fib[i-2]

//     }
//     return fib
// }




// console.log(fib(5));

//big O = O(n)


// function factorial(n){
//     let result = 1
//     for(let i=2; i<=n ; i++){
//         result  = i * result
//     }
//     return result
// }

// console.log(factorial(3));
//big O = O(n)


// function isPrime(n){
//     if(n<=1) return false

//     for(let i=2 ;i<Math.sqrt(n);i++){
//         if(n % i == 0 ) return false
//     }

//     return true
// }


// console.log(isPrime(5));  



//big O = O(n)


// function powerOfTwo(n){
//     if(n<1){
//         return false 
//     }

//     while(n>1){
//         if(n%2 !== 0){
//             return false
//         }

//         n = n/2


//     }

//     return true

// }

// console.log(powerOfTwo(2))

// function bitwisePowerOfTwo(n){
//     if(n<1){
//         return false
//     }
//     return (n & (n-1)) === 0


// }

// console.log(bitwisePowerOfTwo(5))

//big O = O(1)

// function recrussiveFib(n){
//     if(n<2){
//         return n 
//     }
//     return recrussiveFib(n-1) + recrussiveFib(n-2)
// }

// console.log(recrussiveFib(0));
// console.log(recrussiveFib(1));
// console.log(recrussiveFib(6));


// function fibnacci(n) {
//     if (n == 0) return 0
//     if (n == 1) return 1

//     let prev = 0
//     let curr = 1
//     for (let i = 2; i <= n; i++) {
//         let next = prev + curr
//         prev = curr
//         curr = next
//     }

//     return curr
// }


// console.log(fibnacci(0));
// console.log(fibnacci(1));
// console.log(fibnacci(6));


// function factorial(n){

// }


// function num(n){
//     if(n===0) return

//     num(n-1)
//     console.log(n);



// }

// num(5)


// function reverce(wrd){
//     if(wrd.length === 0){
//         return " "
//     }


//     return reverce('byeee')
// }




// function recrussiveFactorial(n){

//     if(n===0){
//       return 1
//     }
//     return n * recrussiveFactorial(n-1)
// }
// console.log(recrussiveFactorial(5));


// function linearSearch(arr,target){
//     for(let i=0;i<arr.length;i++){
//         if(target===arr[i]){
//            return i
//         }
//     }
//     return -1
// }

// console.log(linearSearch([1,2,3,4,5,6,7],3))
// console.log(linearSearch([1,2,3,4,5,6,7],4))
// console.log(linearSearch([1,2,3,4,5,6,7],10))


// function binarySearch(arr,target){
//     let left = 0
//     let right = arr.length-1

//     while(left<=right){
//         let middleIndex = Math.floor((left + right) /2)
//         if(target === arr[middleIndex]){
//             return middleIndex
//         }
//         if(target<arr[middleIndex]){
//              right = middleIndex - 1
//         }else{
//              left = middleIndex + 1
//         }
//     }

//     return -1
// }

// console.log(binarySearch([2,3,6,9,10],9));

// function binaryRecrussive(arr, targert) {

//     return search(arr, targert, 0, arr.length - 1)
// }


// function search(arr, target, left, right) {
//     if (left > right) {
//         return -1
//     }

//     let middleIndex = Math.floor((left + right) / 2)
//     if (target === arr[middleIndex]) {
//         return middleIndex
//     }

//     if (target < arr[middleIndex]) {
//         return search(arr, target, left, middleIndex - 1)
//     } else {

//         return search(arr, target, middleIndex + 1, right)


//     }
// }
// console.log(binaryRecrussive([2, 3, 6, 9, 10], 9));


class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}


class linkedlist{
    constructor(){
        this.head = null
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    getSize(){
        return this.size
    }

    prepend(value){

        const node = new Node(value)

        if(this.isEmpty()){

            this.head = node         
            
        }else{
            node.next = this.head
            this.head = node
        }
         this.size++

    }
    append(value){
        const node = new Node()

        if(this.isEmpty()){
            this.head = node

        }else{
            let prev =this.head
            while (prev.next) {

               prev = prev.next
                
            }
            prev.next = node
        }
    }

    insert(value,index){
       
        if(index<0 || index > this.size){
            return
        }

        if(index === 0){
            return this.prepend(value)
        }else{
            const node = new Node(value)
            let prev = this.head

            for(let i=0;i>index-1;i++){
                prev = prev.next
            }

            node.next = prev.next
            prev.next = node
            this.size++
        }
    }

    print(){
        if(this.isEmpty()){
            console.log('the list is empty');
            
        }else{
            let curr = this.head
            let listOfValues = ''

            while(curr){
                listOfValues+= `${curr.value} `
                curr = curr.next
            }
            console.log('the list of list Of Values',listOfValues);
            
        }

    }

}


const list = new linkedlist()

console.log('to check the if the list is empty',list.isEmpty());
console.log('the size of the list',list.getSize());
list.print()

list.insert(10,0)
list.insert(20,1)
list.print()
console.log(list.getSize());
