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

    return [...quickSort(leftArray), pivot,...quickSort(rightArray)]
}

console.log(quickSort([9,8,7,6,4,3,-2,-19]));
