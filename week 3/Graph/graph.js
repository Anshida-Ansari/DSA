// class Graph{
//     constructor(){
//         this.adjecencyList = {}
//     }

//     addvertex(vertex){
//         if(!this.adjecencyList[vertex]){
//             this.adjecencyList[vertex] = new Set()
//         }
//     }

//     addEdge(vertex1,vertex2){
//         if(!this.adjecencyList[vertex1]){
//             this.addvertex(vertex1)
//         }
//         if(!this.adjecencyList[vertex2]){
//             this.addvertex(vertex2)
//         }

//         this.adjecencyList[vertex1].add(vertex2)
//         this.adjecencyList[vertex2].add(vertex1)

        
//     }

//     display(){
//         for(let vertex in this.adjecencyList){
//             console.log(vertex + '->' + [...this.adjecencyList[vertex]]);
            
//         }
//     }

//     hasEdge(vertex1,vertex2){
//         return(
//             this.adjecencyList[vertex1].has(vertex2)  &&
//              this.adjecencyList[vertex2].has(vertex1)


//         )

            

        
//     }
// }


// const graph = new Graph()

// graph.addvertex('A')
// graph.addvertex('B')
// graph.addvertex('C')


// graph.addEdge('A','B')
// graph.addEdge('B','C')

// console.log(graph.hasEdge('A','C'));

// graph.display()



class Graph{
    constructor(){
        this.adjencencylist = {}
    }

    addVertex(vertex){
        if(!this.adjencencylist[vertex]){
            this.adjencencylist[vertex] = new Set()
        }
    }

    addEdge(vertex1,vertex2){
        if(!this.adjencencylist[vertex1]){
            this.adjencencylist(vertex1)
        }

        if(!this.adjencencylist[vertex2]){
            this.adjencencylist(vertex2)
        }


        this.adjencencylist[vertex1].add(vertex2)
        this.adjencencylist[vertex2].add(vertex1)

    }

    display(){
        for( let vertex in this.adjencencylist){
            console.log(vertex + '->' + [...this.adjencencylist[vertex]]);
            
        }
    }


    hasEdge(vertex1,vertex2){
        return(
            this.adjencencylist[vertex1].has(vertex2) &&
            this.adjencencylist[vertex2].has(vertex1)
        )
    }


    removeEdge(vertex1,vertex2){
        this.adjencencylist[vertex1].delete(vertex2)
        this.adjencencylist[vertex2].delete(vertex1)
    }

    removeVertex(vertex){
        if(!this.adjencencylist[vertex]){
            return
        }
        for(let adjeecencyVertex of this.adjencencylist[vertex]){
            this.removeEdge(vertex,adjeecencyVertex)
        }
        delete this.adjencencylist[vertex]
    }

    bfs(start){

        let queue  = []
        let visited = new Set()

        visited.add(start)
        queue.push(start)

        while(queue.length>0){
            let node = queue.shift()
            console.log(node);
            

            for(let neigbours of this.adjencencylist[node] ){
                if(!visited.has(neigbours)){
                    visited.add(neigbours)
                    queue.push(neigbours)
                }
            }
        }

    }
    dfs(start){
        let stack = []
        stack.push(start)
        let visited = new Set()
        visited.add(start)


        while(stack.length>0){
            let node = stack.pop()
            console.log(node);
            

            for(let neigbours of this.adjencencylist[node]){
                if(!visited.has(neigbours)){
                    visited.add(neigbours)
                    stack.push(neigbours)

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
// graph.removeEdge('A','B')
graph.removeVertex('C')
// console.log(graph.hasEdge('A','B'));

graph.display()
console.log('traversal nokkan');
graph.bfs('B')
console.log('dfs');
graph.dfs('A')

