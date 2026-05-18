class Hashtable{
    constructor(size){

        this.table = new Array(size)
        this.size = size

    }

    hash(key){
        let total  = 0
        for(let i=0;i<key.length;i++){
            total += key.charCodeAt(i)

        }
        return total % this.size
    }

    set(key,value){
        let index = this.hash(key)

        if(!this.table[index]){
            this.table[index] = []
        }

        this.table[index].push([key,value])
    }

    get(key){
        let index = this.hash(key)
        let bucket = this.table[index]
        if(bucket){
            for(let [k,v] of bucket){
                if(k === key

                ){
                    return v
                }
            }
        }
        
    }
}


const table = new Hashtable(60)
table.set('name','anshida')
table.set('mane','pallavo')