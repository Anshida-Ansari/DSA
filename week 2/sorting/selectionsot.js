

function selectionSort(arr){
    let n = arr.length
    for(let i = 0; i<n-2;i++){
        let min = i
        for(let j=i+1 ; j<n ; j++){
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

console.log(selectionSort([9,8,7,6,5,4,3]));






