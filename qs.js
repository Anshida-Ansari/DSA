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

    kthElement(k){
        let count = 0
        let result = null

        function inOrder(node){
            if(!node || result !== null) return 

            inOrder(node.left)
            count++
            if(k === count){
                result = node.value
                return 
            }

            inOrder(node.right)
        }

        inOrder(this.root)
        return result
    }
 }

 const bst  = new BinarySearchTree()
 bst.insert('10')
 bst.insert('20')
 bst.insert('30')


 console.log(bst.kthElement(3));


class TrieNode{
    constructor(){
        this.children = {}
        this.endOfWord = false
    }
}

class Trie{
    constructor(){
        this.root = new TrieNode()
    }

    insert(word){

        let node = this.root

        for(let char of word){
            if(!node.children[char]){
                node.children[char] = new TrieNode()
            }

            node = node.children[char]


        }

        node.endOfWord = true

    }

    startWith(prefix){
        let node = this.root
        for(let char of prefix){
            if(!node.children[char])return []
            node = node.children[char]
        }

        return this.getWord(node,prefix)
    }

    getWord(node,prefix){
        let word = []
        if(node.endOfWord) word.push(prefix)

            for(let char in node.children){
                word.push(...this.getWord(node.children[char],prefix+char))
            }

            return word
    }
}

const trie = new Trie()
trie.insert('App')
trie.insert('Application')
trie.insert('Apple')
trie.insert('water')

console.log(trie.startWith('App'));


class Graph{
    constructor(){
        this.adjecencyList ={}
    }

    addVertex(vertex){
        if(!this.adjecencyList[vertex]){
            this.adjecencyList[vertex] = new Set()
        }
    }

    addEdge(vertex1,vertex2){
        if(!this.adjecencyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjecencyList[vertex2]){
            this.addVertex(vertex2)
        }

        this.adjecencyList[vertex1].add(vertex2)
        this.adjecencyList[vertex2].add(vertex1)
    }

    bfs(start){
        let queue = []
        let visited = new Set()

        visited.add(start)
        queue.push(start)

        while(queue.length>0){
            let node = queue.shift()
            console.log(node);

            for(let neighbour in this.adjecencyList){
                if(!visited.has(neighbour)){
                    visited.add(neighbour)
                    queue.push(neighbour)
                }
            }
            
        }

    }
}

const graph = new Graph()

graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')

graph.addEdge('A','B')
graph.addEdge('B','C')


graph.bfs('A')



 