// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class linkedlist{
//     constructor(){
//         this.head = null
//         this.size = 0
//     }

//     isEmpty(){

//         return this.size === 0

//     }

//     getSize(){
//         return this.size
//     }

//     prepernd(value){

//         const node = new Node(value)
//         if(this.isEmpty()){
//             let head = node
//         }
//         this.size++ 

//     }
// }


// const list = new linkedlist()

// console.log('is list is empty?',list.isEmpty());
// console.log('what is the size of the list',list.getSize());


// class Node {
//     constructor(value) {

//         this.value = value
//         this.next = null

//     }
// }
 

// class linkedlist{
//     constructor(){
//         this.head = null
//         this.size = 0
//     }

//     isEmpty(){
//         return this.size === 0
//     }

//     getSize(){
//         return this.size
//     }

//     prepend(value){

//         const node = new Node(value)

//             if(this.isEmpty()){
                
//                 this.head = node

//             }else{

//                 node.next = this.head
//                 this.head = node 
//             }

//             this.size++
        

//     }

//     append(value){
//         const node = new Node(value)
//             if(this.isEmpty()){
//                 this.head = node
//             }else{

//                 let prev = this.head
//                 while(prev.next){
//                     prev =prev.next
//                 }
//                 prev.next = node

//             }
//             this.size++
        
//     }
//     print(){
//         if(this.isEmpty()){
//             console.log('this list is empty');
            
//         }else{
//             let curr = this.head
//             let listOfValues = ''

//             while(curr){
//                 listOfValues += `${curr.value} `
//                 curr = curr.next
//             }
//             console.log(listOfValues);
//         }     
       
        
//     }
// }

// const list = new linkedlist()

// console.log('to check whether it is empty',list.isEmpty());

// console.log('size of the list',list.getSize());
// list.print()

// list.prepend(10)
// list.print()

// list.prepend(20)
// list.prepend(30)
// list.prepend(49)
// list.append(49)
// list.append(300)
// list.prepend(500)
// list.print()




// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }

// }

// class linkedlist{
//     constructor(){
//         this.head = null
//         this.size = 0
//     }


//     isEmpty(){
//         return this.size === 0

//     }

//     getSize(){
//         return this.size
//     }

//    prepend(value){
//     const node = new Node(value)
//     if(this.isEmpty()){
//         this.head = node
//     }else{
//         node.next = this.head
//         this.head = node
//     }

//     this.size++

//    }
//    append(value){
//     const node = new Node(value)
//     if(this.isEmpty()){
//         this.head = node
//     }else{
//         let prev = this.head
//         while(prev.next){
//             prev = prev.next
//         }
//         prev.next = node

//     }
//     this.size++

//    }

//    insert(value,index){
//     if(index < 0 && index>this.size){
//         return
//     }
//     if(index === 0){
//         return this.prepend(value)
//     }else{
//         const node = new Node(value)
//         let prev = this.head
//         for(let i=0;i<index-1;i++){
//              prev = prev.next
            
//         }
//         node.next = prev.next
//             prev.next = node
//             this.size++
//     }
//    }

//    removeFrom(index){

//     if(index < 0 || index >= this.size){
//         return null
//     }
//     let removeNode
//     if(index === 0){
//         removeNode = this.head
//         this.head = this.head.next
//     }else{
//         let prev = this.head
//         for(let i=0;i<index-1;i++){
//             prev = prev.next
//         }
//         removeNode = prev.next
//         prev.next = removeNode.next

//     }
//     this.size --
//     return removeNode.value

//    }
//    removeValue(value){
//     if(this.isEmpty()){
//         return null
//     }
//     if(this.head.value === value){
//         this.head = this.head.next
//         this.size--
//         return value
//     }else{
//         let prev = this.head

//         while(prev.next && prev.next.value !== value){
//             prev = prev.next
//         }
//         if(prev.next){
//             const removeNode = prev.next
//             prev.next = removeNode.next
//             this.size--
//             return value
//         }
//         return null
//     }
//    }

//    reverse(){
//     let curr = this.head
//     let prev = null

//     while(curr){
//        let next = curr.next
//        curr.next = prev
//        prev = curr
//        curr = next
        
//     }
//     this.head = prev
//    }

//    middle(){
//    if(this.isEmpty()){
//     console.log('list is empty');
//     return
    
//    }
//    let slow = this.head
//    let fast = this.head

//    while(fast !== null && fast.next !== null ){
//     slow = slow.next
//     fast = fast.next.next
//    }
//    console.log('the middle number is ',slow.value);
   
//    }

//    print(){
//     if(this.isEmpty()){
//         console.log('the list is empty');
        
//     }else{
//         let curr = this.head
//         let listOfValues = ''

//         while(curr){
//             listOfValues += `${curr.value} `
//             curr = curr.next

//         }
//         console.log(listOfValues);
        
//     }
//    }
// }


// const list = new linkedlist()

// console.log(list.getSize());
// console.log(list.isEmpty());
// list.print()

// list.prepend(29)
// list.prepend(49)
// list.prepend(89)
// list.append(18)
// list.insert(20,2)
// console.log(list.getSize());
// console.log(list.removeValue(1));

// list.reverse()
// list.print()
// list.middle()





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
        const node = new Node(value)

        if(this.isEmpty()){
            this.node = node
        }else{
            let prev = this.head

            while(prev.next){
                prev = prev.next
            }
    
           prev.next = node
        }
       this.size++
    }

    insert(value,index){
        if(index<0 || index>this.size){
            return
        }
        if(index === 0){
            return this.prepend(value)
        }else{
            const node = new Node(value)
            let prev = this.head

            for(let i=0;i<index-1;i++){
                prev = prev.next
            }
          ndoene
          prev.next = node 
          

            
        }
    }

    print(){
        if(this.isEmpty()){
            console.log('the list is empty');
            
        }else{
            let curr = this.head
            let listOfValues = ''
            while(curr){
                listOfValues += `${curr.value} `
                curr = curr.next
            }
            console.log(listOfValues);
            
        }
    }
    
}

const list = new linkedlist()
list.prepend(20)
list.append(50)
list.print()
