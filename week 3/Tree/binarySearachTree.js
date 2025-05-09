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
        if(newNode.value < root.value){
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
            }else if(value<root.value){
                return this.search(root.left,value)

            }else{
                return this.search(root.right,value)
            }
        }
    }
    preorder(root){
        if(root){
            console.log(root.value);
            this.preorder(root.left)
            this.preorder(root.right)
            
        }
    }
    inorder(root){
        if(root){
            this.inorder(root.left)
            console.log(root.value);
            this.inorder(root.right)
            
        }
    }
    postOrder(root){
       if(root){
        this.postOrder(root.left)
        this.postOrder(root.right)
        console.log(root.value)
       }
        
    }
    levelOrder(){
        let queue = []
        queue.push(this.root)
        while(queue.length){
            let curr = queue.shift()
            console.log(curr.value);

            if(curr.left){
                queue.push(curr.left)
          
            }
            if(curr.right){
                queue.push(curr.right)
                
            }
            
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
    delete(value){
        this.root = this.deleteNode(this.root,value)
    }
    deleteNode(root,value){
        if(root === null){
            return null
        }else{
            if(value < root.value){
                root.left = this.deleteNode(root.left,value)
            }else if(value > root.value){
                root.right = this.deleteNode(root.right,value)              
            }else{
                if(!root.left && root.right){
                    return null
                }
                if(!root.left){
                    return root.right

                }else if(!root.right){
                    return root.left
                }

                root.value = this.min(root.right)
                root.right = this.deleteNode(root.right,root.value)
            }
            return root
        }
    }

    kthSmallest(k){
        let count = 0
        let result = null

        function inorder(node){
            if(!node || result !== null)return

            inorder(node.left)
                count++
                if(k===count){
                    result = node.value
                    return
                }

                inorder(node.right)
                
            
        }
        inorder(this.root)
        return result
    }
}

const bst = new BinarySearchTree()
console.log(bst.isEmpty());


bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)


// bst.delete(10)
bst.levelOrder()

bst.insert(7)

// console.log(bst.search(bst.root,10));
// console.log(bst.search(bst.root,20));
// console.log(bst.search(bst.root,90));
// console.log(bst.search(bst.root,15));

bst.preorder(bst.root)
// bst.inorder(bst.root)
bst.postOrder(bst.root)
bst.levelOrder()


console.log(bst.kthSmallest());

// console.log(bst.min(bst.root));
// console.log(bst.max(bst.root));





