// class Node{

//     constructor(value){
//         this.value = value
//         this.next = null
//         this.prev = null
//     }

// }

// class doublylinkedlist{
//     constructor(){
//         this.head = null
//         this.tail = null
//         this.size = 0
//     }

//     append(value){
//         const node = new Node(value)

//         if(!this.head){
//             this.head = node
//             this.tail = node
//             this.size++
//             return value

//         }
//         this.tail.next = node //node will be palced after the tail
//         node.prev = this.tail // node prev will be tail
//         this.tail = node // making the new node the tail
        
//     }

//     prepend(value){
//         const node = new Node(value)

//         if(!this.head){
//             let head = node 
//             this.tail = node
//             this.size++
//             return value
//         }else{
//              node.next = this.head
//              this.head.prev = node
//              this.head = node
//         }

//         this.size++


//     }
//     reverse(){
//         let curr = this.head
//         let temp = null

//         while(curr){
//             temp = curr.prev
//             curr.prev= curr.next
//             curr.next = temp

//             curr = curr.prev
//         }
//         if(temp){
//             this.tail = this.head
//             this.head = temp.prev
//         }
//     }

//     print(){
//         let curr = this.head
//         let values = ''

//         while (curr) {
            
//             values += `${curr.value} <-> `           
//             curr = curr.next           
            
//         }
//         console.log(values);
        
//     }
// }

// const doubleList = new doublylinkedlist()

// doubleList.append(20)
// doubleList.append(50)
// doubleList.append(90)
// doubleList.print()

// doubleList.prepend(35)
// doubleList.print()
// doubleList.reverse()
// doubleList.print()

// reverse(){
//     let curr = this.head
//     let temp = null

//     while(curr){
//         temp = curr.prev
//         curr.prev = curr.next
//         curr.next = temp

//         curr = curr.next

//         if(temp){
//             this.tail = this.head
//             this.head = temp.prev
//         }
//     }
// }

