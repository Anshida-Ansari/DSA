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
    
    preppend(value){
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
      let slow = this.head
      let fast = this.head
      
     while(fast !== null && fast.next !== null){
       slow = slow.next
       fast = fast.next.next
       
       
     }
     console.log(slow.value)
    }
    
    removeEven(){
      
      while(this.head !== null && this.head.value % 2 !==0){
        this.head = this.head.next
        this.size--
      }
      
      let curr = this.head.next
      let prev = this.head
      
      while(curr){
        if(curr.value % 2 !== 0){
          prev.next = curr.next
          this.size--
        }else{
          prev = curr
          
        }
        curr = curr.next
      }
      
      
    }
    
    removeDup(){
      let curr = this.head
      let seen = new Set()
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
    reverse(){
      let prev = null
      let curr = this.head
      
      while(curr){
        let next = curr.next
        curr.next = prev
        prev = curr
        curr = next
      }
      this.head = prev
    }
   deleteOdd(){
     if(this.isEmpty())return
     
     if(this.head.value%2 !== 0){
        
        this.head = this.head.next
        this.size--
        return
   }
   
   let prev = this.head
   let curr = this.head.next
   
   while(curr){
     if(curr.value % 2 !== 0){
       prev.next = curr.next
       break
     }else{
       prev = curr
     }
     curr = curr.next
     
   }
   }
    print(){
      
      
      let value = ''
      let curr = this.head
      
      while(curr){
        value += `${curr.value} ->`
        curr = curr.next
      }
      console.log(value+null)
    }
    
    
}


 let ls = new LinkedList()
    
    ls.preppend(23)
    ls.preppend(24)
    ls.append(32)
    ls.append(23)
    ls.append(123)
    ls.append(34)
    ls.append(1)
    ls.append(34)
    
    ls.print()
    
//     ls.middle()
// ls.reverse()
// ls.print()

// ls.removeDup()
// ls.print()    

// ls.removeEven()
// ls.print()
// ls.removeEven()
ls.deleteOdd()
ls.print()
ls.deleteOdd()
ls.print()
ls.deleteOdd()
ls.print()
ls.deleteOdd()
ls.print()
