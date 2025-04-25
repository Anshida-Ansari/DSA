function bubbleSort(arr){
    let n = arr.length
    for(let i=0;i<n-1;i++){
        let swapped = false
        for(let j=0;j<n-i-1;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp

                swapped = true
            }
        }
        if(!swapped)
            break
    }
    return arr
}

console.log(bubbleSort(['cat','apple','bubble']));


function selectionSort(arr){
    let n = arr.length
    for(let i = 0 ; i<n-1 ;i++){
        let min =i
        for(let j=i+1;j<n;j++){
            if(arr[j]<arr[min]){
                min = j

            }
            
        }


        if(min !== i){
            let temp = arr[i]
            arr[i] = arr[min]
            arr[min] = temp
        }
    }

    return arr

}

console.log(selectionSort(['jalva','lena','hiba','anshida']));


function insertSort(arr){
    let n = arr.length

    for(let i=0;i<n;i++){
        let temp = arr[i]
        let j=i-1

        while(j>=0 && arr[j]>temp){
            arr[j+1] = arr[j]
            j--

        }
        arr[j+1] = temp
           
    }
    return arr




}
console.log(insertSort(['saleena','ansari','hiba','nasheedha']));


function mergeSort(arr){
    if(arr.length <2){
        return arr
    }

    let mid = Math.floor(arr.length/2)
    let left = arr.slice(0,mid)
    let right = arr.slice(mid)

    return merge(mergeSort(left),mergeSort(right))
}

function merge(left , right){
    let sorted = []
    while(left.length && right.length){
        if(left[0]<right[0]){
            sorted.push(left.shift())
        }else{
            sorted.push(right.shift())
        }
    }
    return [...sorted,...left,...right]
}


console.log(mergeSort(['z','q','x']));

function quickSort(arr){

    if(arr.length<2){
        return arr
    }
    let pivot = arr[arr.length-1]
    let left = []
    let right = []


    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }

    return[...quickSort(left),pivot,...quickSort(right)]
    
}

console.log(quickSort(['c','a','b']));



function common (str1,str2){

    let freq = {}
    let common = []
    for(let char of str2){
        freq[char] = (freq[char] || 0)+1
    }

    for(let char of str1){
        if(freq[char]){
            common.push(char)
            freq[char]--
        }
    }
    return common
}

console.log(common('anshida','annshi'));


function isValidParentheses(str){

    let stack = []
    let map = {

        '}':'{',
        ']':'[',
        ')':'('

    }

    for(let char of str){
        if(char === '{' || char === '[' || char === '('){
            stack.push(char)
            
        }
        else{
            if(stack.pop() !== map[char]){
                return false
            }
        }
    }
    return true
}

console.log(isValidParentheses('[{}]'));
console.log(isValidParentheses('[{[[[[]]]]}][][]}}}'));


function merge(left , right , key ){
    let result = []
    let i = 0
    let j = 0

    while(i<left.length && j<right.length){
        if(left[i][key] < right[j][key]){
            result.push(left[i])
            i++
        }else{
            result.push(right[j])
            j++
        }
       
    }
    while(i<left.length){
        result.push(left[i])
        i++
    }
    while(j<right.length){
        result.push(right[j])
        j++
    }
    return result
}

function mergeSort(arr,key){
    if(arr.length<2){
        return arr
    }

    let mid = Math.floor(arr.length/2)
    let left = arr.slice(0,mid)
    let right = arr.slice(mid)

   return merge(mergeSort(left,key),mergeSort(right,key),key)
}
const people = [
    { name: 'John', age: 30 },
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 35 },
    { name: 'Eve', age: 28 }
];

const result = mergeSort(people,'name')
console.log(result);


function validAnagram(str1,str2){
    let freq = {}

    for(let char of str1){
        freq[char] = (freq[char] || 0)+1
    }

    for(let char of str2){
        if(!freq[char]){
            return false
        }
        freq[char]--
    }

    return true



}

console.log(validAnagram('silent','listen'));
