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
    search(word){

        let node = this.root

        for(let char of word){
            if(!node.children[char]) return false
            node = node.children[char]
        }

        return node.endOfWord

    }
    delete(word){
        this.deleteWord(this.root,word,0)
    }
    deleteWord(node,word,index){
        if(index === word.length){
            if(!node.endOfWord) return false
            node.endOfWord = false
            return Object.keys(node.children).length === 0
        }

        let char = word[index]
        if(!node.children[char]){
            return false
        }

        let del = this.deleteWord(node.children[char],word,index+1)

        if(del){
            delete node.children[char]
            return Object.keys(node.children).length === 0
        }

        return false
    }



    startWith(prefix){
        let node = this.root

        for(let char of prefix){
            if(!node.children[char]) return []
            node = node.children[char]
        }

        return this.getWords(node,prefix)
    }

   getWords(node,prefix){
    let words = []
    if(node.endOfWord) words.push(prefix)

        for(let char in node.children){
            words.push(...this.getWords(node.children[char],prefix+char))
        }

        return words
   }
  

   
   autoComplete(prefix) {
    const suggestions = this.startWith(prefix);
    if (suggestions.length === 0) return prefix;
    return suggestions[0];
  }
  


}

const trie = new Trie()
trie.insert('apple')
trie.insert('app')
trie.insert('application')
trie.insert('water')
console.log(trie.search('zwbra'));

console.log(trie.startWith('app'));
trie.delete('apple')
console.log(trie.search('apple'));

console.log(trie.startWith('app'));
console.log(trie.autoComplete('appl'));



//** Compelxity */ 

//insert time : O(l) 
//search time : o(l) 


// class TrieNode{
//     constructor(){
//         this.children = {}
//         this.endOfWord = false
//     }
// }


// class Trie{
//     constructor(){
//         this.root = new TrieNode()
//     }

//     insert(word){
//         let node = this.root
//         for(let char of word){
//             if(!node.children[char]){
//                 node.children[char] = new TrieNode()
//             }

//            node =  node.children[char] 
//         }

//         node.endOfWord = true
//     }

//     search(word){
//         let node = this.root
//         for(let char of word){
//             if(!node.children[char])return false  
//             node = node.children[char]
//         }

//         return node.endOfWord
//     }

//     strartWith(prefix){
//         let node = this.root
//         for(let char of prefix){
//             if(!node.children[char]) return []
//         node = node.children[char]

//         }
//         return this.getWord(node,prefix)
        
//     }
//     getWord(node,prefix){
//         let words = []

//         if(node.endOfWord) words.push(prefix)

//             for(let char in node.children){
//                 words.push(...this.getWord(node.children[char],prefix+char))
//             }

//             return words
//     }
//     delete(word){
//         this.deleteWord(this.root,word,0)
//     }
//     deleteWord(node,word,index){
//         if(index === word.length){
//             if(!node.endOfWord) return false
//             node.endOfWord = false
//             return Object.keys(node.children).length === 0
//         }

//         let char = word[index]
//         if(!node.children[char]){
//             return false
//         }

//         let deletee = this.deleteWord(node.children[char],word,index+1)
//         if(deletee){
//             delete node.children[char]
//             return Object.keys(node.children).length === 0
//         }
//         return false
//     }

// }

// const trie = new Trie()
// trie.insert('application')
// trie.insert('apple')
// trie.insert('app')
// trie.insert('applying')

// console.log(trie.search('anshida'));


// console.log('the words startimg with the letter APP is',trie.strartWith('appl'));
// trie.delete('app')

// console.log(trie.search('app'));






