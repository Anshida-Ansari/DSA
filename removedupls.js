// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }


// class LinkedList{
//     constructor(){
//         this.head = null
//         this.size = 0
//     }
    
//     isEmpty(){
//         return this.size === 0
//     }
    
//     prepend(value){
//         let node = new Node(value)
//         if(this.isEmpty()){
//             this.head = node
//         }else{
          
//           node.next = this.head 
//           this.head = node
//         }
        
//         this.size++
//     }
//     append(value){
//         let node = new Node(value)
//             if(this.isEmpty()){
//                 this.head = node
//             }else{
                
//                 let prev = this.head
//                 while(prev.next){
//                     prev = prev.next
//                 }
//                 prev.next = node
//             }
        
//         this.size ++
//     }
    
//     middle(){
//         if(this.isEmpty()){
//             return
//         }
        
//         let slow = this.head
//         let fast = this.head
        
//         while(fast !== null && fast.next !== null){
//             slow = slow.next
//             fast = fast.next.next
//         }
        
//         console.log(slow.value)
//     }
//     removeDup(){
//         let seen = new Set()
//         let curr = this.head 
//         let prev = null
        
//         while(curr){
//             if(seen.has(curr.value)){
                
//                 prev.next = curr.next
                
//             }else{
//                 seen.add(curr.value)
//                 prev = curr
//             }
//             curr = curr.next
//         }
//     }
    
//     print(){
//         let values = ''
//         let curr = this.head
//         while(curr){
//             values += `${curr.value}->`
//             curr = curr.next
//         }
        
//         console.log(values + null)
//     }
    
    
    
// }

// let ls = new LinkedList()

// ls.prepend(12)
// ls.prepend(80)
// ls.prepend(12)
// ls.append(70)
// ls.prepend(10)
// ls.prepend(10)
// ls.print()


// // ls.middle()
// console.log(ls.isEmpty())
// ls.removeDup()
// ls.print()

class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }
    
    isEmpty(){
        return this.size === 0
    }
    
    prepend(value){
        let node = new Node(value)
        
        if(this.isEmpty()){
            this.head = node
        }else{
            
          
            node.next = this.head
            this.head = node
        }
        
        this.size++
    }
    
    append(value){
        let node = new Node(value)
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

    middle(){
        let fast = this.head
        let slow = this.head
        while(fast !== null && fast.next !== null){

            fast = fast.next.next
            slow = slow.next

        }

        console.log(slow.value);
        
    }

        removeDup(){
            let seen = new Set()
            let curr = this.head
            let prev = null

            while(curr){
                if(seen.has(curr.value)){
                    prev.next = curr.next
                }else{
                    seen.add(curr.value)
                    prev = curr
                }

                curr = curr.next
            }
        }
    print(){
        let curr = this.head
        let value = ''
        while(curr){
            value += `${curr.value}->`
            curr = curr.next
        }
        console.log(value+null)
    }
}

const ls = new LinkedList()
ls.prepend(10)
ls.append(20)
ls.append(50)
ls.prepend(39)
ls.prepend(10)
ls.print()  

ls.middle()
ls.removeDup()

ls.print()
