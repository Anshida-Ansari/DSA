

// function insertSort(array){
//     for(let i=1;i<array.length;i++){
//         let temp = array[i]
//         j=i-1

//         while(j>=0 && array[j]>temp){
//             array[j+1]=array[j]
//             j--
//         }
//         array[j+1] = temp
//     }
//     return array
// }


// console.log(insertSort([3,2,6,7,5]));


function insertSort(arr){
    let n = arr.length
    for(let i=1;i<n;i++){
    let temp = arr[i]
    let j=i-1

    while(arr[j]>temp && j>=0){
        arr[j+1] = arr[j]
        j--
    }
    arr[j+1] = temp

    }
    return arr

}

// console.log(insertSort([10,9,8,7,6,4,3,2,1]));

// function insertSort(arr){
//     let n = arr.length
//     for(let i=0;i<n;i++){
//         let temp = arr[i]
//         let j = i-1

//         while(j>=0 && arr[j]>temp){
//             arr[j+1] = arr[j]
//             j--

//         }

//         arr[j+1] = temp


//     }
//     return arr
// }

// console.log(insertSort([9,8,7,6,5,4,0]));

function insertSort(arr){
    let n = arr.length
    for(let i=0;i<n;i++){

    }
}