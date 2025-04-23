function mergeArray(arr){
    if(arr.length<2){
        return arr
    }

    let mid = Math.floor(arr.length/2)
    let leftArray =arr.slice(0,mid)
    let rightArray = arr.slice(mid)

    return merge(mergeArray(leftArray),mergeArray(rightArray))
}

function merge(leftArray,rightArray){
    const sortedArr = []
    while(leftArray.length && rightArray.length){
        if(leftArray[0]<=rightArray[0]){
            sortedArr.push(leftArray.shift())
        }else{
            sortedArr.push(rightArray.shift())
        }
    }
    return[...sortedArr, ...leftArray, ...rightArray]
}

console.log(mergeArray([9,-9,-1,8,7,6,5,43,1]));
