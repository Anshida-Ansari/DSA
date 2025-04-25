// class linearProbing{
//     constructor(size){
//         this.table = new Array(size)
//         this.size = size
//     }

//     hash(key){
//         let total = 0
//         for(let i=0;i<key.length;i++){
//             total += key.charCodeAt(i)
//         }
//         return total % this.size
//     }

//     set(key,value){
//         let index = this.hash(key)
//         while(this.table[index] && this.table[index].key !== key){
//             index = (index + 1)%this.size
//         }
//         this.table[index] = {key , value}

//     }
//     get(key){
//         let index = this.hash(key)
//         while(this.table[index]){
//             if(this.table[index].key === key){
//                 return this.table[index].value
//             }
//         }
//         return undefined
//     }

//     remove(key){
//         let index = this.hash(key)
//         while(this.table[index]){
//             if(this.table[index].key === key){
//                 let removed = this.table[index].value
//                 this.table[index] = undefined  
//                 return removed 
//             }
//         }
//         return undefined
//   }

//   print(){
//     console.log(this.table);
    
//   }

// }


//  const lp = new linearProbing(5)

//  lp.set('name' , 'anshida')
//  lp.set('mane' , 'ansari')
//  lp.print()

class linearProbing{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }
    
    hash(key){
        let total = 0
        for(let i=0;i<this.table.length;i++){
            total += key.charCodeAt(i)
        }
        return total % this.size
    }
    
    
    set(key,value){
        let index = this.hash(key)
        
    while(this.table[index] && this.table[index].key !== key){
        index = (index + 1)% this.size
    }
    this.table[index]={key,value}
    }
    
    get(key){
        let index = this.hash(key)
        while(this.table[index]){
            if(this.table[index].key === key){
                return this.table[index].value
            }
            
            index = (index+1)%this.size
        }
        return undefined
    }
    
    
    remove(key){
        let index =this.hash(key)
        while(this.table[index]){
            if(this.table[index].key === key){
                let remover = this.table[index]
                this.table[index] = undefined
                return remover
            }
            index = (index+1)%this.size
        }
        return undefined
        
    }
    
    display(){
        console.log(this.table())
    }
    
}

const lp = new linearProbing()
lp.set('name', 'anshida')
lp.set('mane','aamrin')
lp.display()
