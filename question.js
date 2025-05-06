
//find the frequency of the numbers in a array

function freq(arr) {
    let freq = {}

    for (let num of arr) {
        if (freq[num]) {
            freq[num]++
        } else {
            freq[num] = 1
        }
    }
    return freq
}

console.log(freq([9, 8, 7, 7, 6, 1, 2, 3, 3, 4, 4, 4, 4]));

function bubbleSort(arr) {
    let n = arr.length
    for (let i = 0; i < n - 1; i++) {
        let swapped = false

        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp

                swapped = true
            }
        }

        if (!swapped)
            break


    }

    return arr
}

console.log(bubbleSort([8, 7, 6, 5, 4, 1, 2, 3]));


function insertSort(arr) {
    let n = arr.length
    for (let i = 0; i < n; i++) {

        let temp = arr[i]
        let j = i - 1

        while (j >= 0 && arr[j] > temp) {
            arr[j + 1] = arr[j]
            j--
        }

        arr[j + 1] = temp
    }

    return arr
}


console.log(insertSort([9, 8, 7, 1, 4, -1, -9]));

function selectionSort(arr) {
    let n = arr.length
    for (let i = 0; i < n-1; i++) {
        let min = i

        for (let j = i+1; j < n; j++) {
            if (arr[j] < arr[min]) {
                min = j
            }

        }
        if (min !== i) {
            let temp = arr[i]
            arr[i] = arr[min]
            arr[min] = temp

        }

    }

    return arr
}

console.log(selectionSort([9, 8, 7, 6, 5, 4]));


function quickSort(arr){
    if(arr.length<2){
        return arr  
    }
    let pivot = arr[arr.length-1]

    let leftArray = []
    let rightArray = []

    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<pivot){
            leftArray.push(arr[i])
        }else{
            rightArray.push(arr[i])
        }
    }

    return[...quickSort(leftArray),pivot,...quickSort(rightArray)]
}

console.log(quickSort([9,8,7,6,5,4]));




function mergeSort(arr){
    if(arr.length<2){
        return arr
    }

    let mid = Math.floor(arr.length/2)
    let leftArray = arr.slice(0,mid)
    let rightArray = arr.slice(mid)


    return merge(mergeSort(leftArray),mergeSort(rightArray))
}

function merge(leftArray,rightArray){
    let sortedArr = []

    while (leftArray.length && rightArray.length) {
        if(leftArray[0] <= rightArray[0]){
           sortedArr.push(leftArray.shift())
        }else{
            sortedArr.push(rightArray.shift())
        }
        
    }

    return[...sortedArr,...leftArray,...rightArray]
}


console.log(mergeSort([9,8,7,6,-1,-8]));


class queue{
    constructor(){
        this.item = {}

    }
}

function isValidParentheses(s){
    let stack = []
    let map = {
        '}':'{',
        ']':'[',
        ')':'('
    }
    
    for(let char of s){
        if(char === '{' || char === '[' || char === '('){
             stack.push(char)
            
        }else{
            if(stack.pop() !== map[char])
            return false
        }
       
    }
    return stack.length === 0
 }
 
 
 console.log(isValidParentheses("()[]{}")); 
 console.log(isValidParentheses("([)]"));  

 function isAnagram(str1,str2){
    if(str1.length !== str2.length){
        return false
    }
    
    let freqMap = {}
    for(let char of str1){
        freqMap[char] = (freqMap[char] || 0)+1
    }
    
    for(let char of str2){
        if(!freqMap[char]){
            return false
            
        }
        
        freqMap[char]--
    }
    
    return true
    
}

console.log(isAnagram("listen", "silent")); 
console.log(isAnagram("hello", "bello"));

function mergeTwoArray(arr1,arr2){
    let i=0,j=0
    let result = []
    
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<arr2[j]){
            result.push(arr1[i])
            i++
        }else{
            result.push(arr2[j])
            j++
        }
    }
    
    while(i<arr1.length)  result.push(arr1[i++])
    while(j<arr2.length)result.push(arr2[j++])
    return result
}

console.log(mergeTwoArray([1, 3, 5], [2, 4, 6]));


//**common from two string  */

function common(str1,str2){
    let freq = {}
    let result = []

    for(let char of str2){
        freq[char] = (freq[char] || 0)+1
    }
    for(let char of str1){
        if(freq[char]){
            result.push(char)
            freq[char]--
        }
    }

    return result
}


console.log(common('aabbcc','abcabc'));


//**two sum */
function twoSum(nums,target){
    let map = {}

    for(let i=0;i<nums.length;i++){
        let curr = nums[i]
        let element = target - curr
        
        
        if(map[element] !== undefined){
            return [map[element],i]
        }
        
        map[curr] = i
    }
    
    return []
}
console.log(twoSum([9,7,6,542,2],8))



