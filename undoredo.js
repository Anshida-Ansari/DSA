


class UndoRedo{
  constructor(){
    this.undoStack = []
    this.redoStack = []
  }
  
  do(action){
    this.undoStack.push(action)
    this.redoStack = []
  }
  
  undo(){
    if(this.undoStack.length === 0)return
    
    let lastaction = this.undoStack.pop()
    this.redoStack.push(lastaction)
  }
  
  redo(){
    if(this.redoStack.length === 0)return
    
    let actiondone = this.redoStack.pop()
    this.undoStack.push(actiondone)
  }
  pritStack(){
    console.log(this.undoStack)
    console.log(this.redoStack)
  }
}


let editor = new UndoRedo()

editor.do('type A')
editor.do('type B')
editor.do('type C')

editor.undo()
editor.undo()

editor.redo()























// editor.redo()
editor.pritStack()







// class Node{
//   constructor(value){
//     this.value = value
//     this.right = null
//     this.left = null
//   }
// }

// class Tree{
//   constructor(){
//     this.root = null
//   }
  
//   isEmpty(){
//     return  this.root === null
//   }
//   insert(value){
//     let newNode = new Node(value)
//     if(this.isEmpty()){
//       this.root = newNode
//     }else{
//       this.insertNode(this.root,newNode)
//     }
//   }
//   insertNode(root,newNode){
//     if(newNode.value<root.value){
//       if(root.left === null){
//         root.left = newNode
//       }else{
//         this.insertNode(root.left,newNode)
//       }
//     }else{
//       if(root.right===null){
//         root.right = newNode
//       }else{
//         this.insertNode(root.right,newNode)
//       }
//     }
//   }
//   bfs(){
//     let queue = []
//     queue.push(this.root)
//     while(queue.length){
//       let curr = queue.shift()
//       console.log(curr.value)
      
//     if(curr.left){
//       queue.push(curr.left)
//     }
//     if(curr.right){
//       queue.push(curr.right)
//     }
//     }
//   }
  
//   kthElement(k){
//     let count = 0 
//     let result = null
    
//     function inOrder(node){
//       if(!node || result !== null)return
      
//       inOrder(node.left)
      
//       count++
//       if(k === count){
//         result = node.value
//         return
//       }
      
//       inOrder(node.right)
//     }
    
//     inOrder(this.root)
//     return result
//   }
// }





// let bst = new Tree()
// bst.insert(40)
// bst.insert(10)
// bst.insert(50)
// bst.bfs()

// console.log(bst.kthElement(1))
