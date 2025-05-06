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

        for(let char in word){
            if(!node.children[char]){
                node.children[char] = new TrieNode()
            }

            node = node.children[char]
        }

        node.endOfWord = true
    }
}

const trie = new Trie()
trie.insert('apple')
trie.insert('app')
trie.insert('application')
trie.insert('water')


//** Compelxity */ 

//insert time : O(l) space: