// // function bubblesort(arr){
// //     let n = arr.length
// //     let swapped = false

// //     for(let i=0;i<n-1;i++){
// //         for(let j=0;j<n-1-i;i++){
// //             if(arr[j]>arr[j+1]){
// //                 let temp = arr[j]
// //                 arr[j] = arr[j+1]
// //                 arr[j+1] = temp

// //                 swapped = true
// //             }
// //         }

// //         if(!swapped)
// //             break
// //     }
// //     return arr
// // }

// // console.log(bubblesort([9,8,7,6,5]));


// // function insertSort(arr){
// //     let n = arr.length
// //     for(let i=0;i<n;i++){
// //         let temp = arr[i]
// //         j=i-1

// //       while(j>=0 && arr[j]>temp){
// //         arr[j+1] = arr[j]
// //         j--
// //       }

// //       arr[j+1] = temp

// //     }

// //     return arr
// // }

// // console.log(insertSort([9,8,7,6,5,43,1]));

// // function selectSort(arr){
// //     let n = arr.length

// //     for(let i=0;i<n-1;i++){
// //         let min = i
// //         for(let j=i+1;j<n;j++){
// //             if(arr[j]<arr[min]){
// //                 min = j
// //             }
        
// //         }
// //         if(min !== i){
// //              let temp = arr[i]
// //              arr[i] = arr[min]
// //              arr[min] = temp
// //         }
// //     }
// //     return arr
// // }


// // console.log(selectSort([9,8,7,6,5,4]));




// //practice all soting algorithm

// //bubbleSort

// function bubbleSort(arr){
//     let n = arr.length
//     let swapped = false

//     for(let i=0;i<n-1;i++){
//         for(let j=0;j<n-1-i;j++){
//             if(arr[j]>arr[j+1]){
//                 let temp = arr[j]
//                 arr[j] = arr[j+1]
//                 arr[j+1] = temp

//                 swapped = true
//             }
//         }

//         if(!swapped){
//             break
//         }
//     }

//     return arr
// }

// console.log(bubbleSort([-6,20,8,-2,4]));


// function insertSort(arr){
//     let n = arr.length

//     for(let i=0;i<n;i++){
//         let temp = arr[i]
//         let j = i-1

//         while(j>=0 && arr[j]>temp){
//               arr[j+1] = arr[j]
//               j--
//         }
//         arr[j+1] = temp

//     }
//     return arr
// }
// console.log(insertSort([-6,20,8,-2,4]));

// function selectionSort(arr){
//     let n = arr.length
//     for(let i=0;i<n-1;i++){
//         min = i
//         for(let j=i+1;j<n;j++){
//             if(arr[j]<arr[min]){
//                 min = j

//             }
           
//         }
//         if(min !== i){
//             let temp = arr[i]
//                 arr[i] = arr[min]
//                 arr[min] = temp
//         }
        
//     }
//     return arr

// }


// console.log(selectionSort([-6,20,8,-2,4]));


// function mergeSort(arr){
//     if(arr.length <2){
//         return arr
//     }

//     let mid = Math.floor(arr.length/2)
//     let leftArray =arr.slice(0,mid)
//     let rightArray = arr.slice(mid)

//     return merge(mergeSort(leftArray),mergeSort(rightArray))
// }

// function merge(leftArray, rightArray){
//     let sortedArr = []
//     while(leftArray.length && rightArray.length){
//         if(leftArray[0]<=rightArray[0]){
//             sortedArr.push(leftArray.shift())
//         }else{
//             sortedArr.push(rightArray.shift())
//         }
//     }

//     return [...sortedArr,...leftArray,...rightArray]
// }

// console.log(mergeSort([-6,20,8,-2,4]));

// function quickSort(arr){

//     if(arr.length<2){
//         return arr

//     }

//     let pivot = arr[arr.length-1]
//     let leftArray = []
//     let rightArray = []

//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i]<pivot){
//             leftArray.push(arr[i])
//         }else{
//             rightArray.push(arr[i])
//         }
//     }

//     return [...quickSort(leftArray),pivot,...quickSort(rightArray)]

// }

// console.log(quickSort([-6,20,8,-2,4]));






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

    return [...quickSort(leftArray),pivot,...quickSort(rightArray)]

}


console.log(quickSort([9,8,7,6,5,4,-2]));


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
    while(leftArray.length && rightArray.length){
        if(leftArray[0]<rightArray[0]){
            sortedArr.push(leftArray.shift())
            
        }else{
            sortedArr.push(rightArray.shift())
        }
    }

    return [...sortedArr,...leftArray,...rightArray]
}

console.log(mergeSort([9,8,7,6,5,4,-2]));

function selectionSort(arr){
    let n = arr.length
    for(let i=0;i<n-1;i++){
        let min = i

        for(let j=i+1;j<n;j++){
            if(arr[j]<arr[min]){
                min = j
            }
        }

        if(min !==0){
            let temp = arr[i]
            arr[i] = arr[min]
            arr[min] = temp
        }
    }
    return arr
}

console.log(selectionSort([9,8,7,6,5,4,-2]));


function insertSort(arr){
    let  n  = arr.length
for(let i = 0;i<n;i++){
    let temp = arr[i]
    let j = i-1

    while(j>=0 && arr[j]>temp){
        arr[j+1] = arr[j]
        j--
    }
    arr[j+1] = temp
}
return arr


}
console.log(insertSort([9,8,7,6,5,4,-2]));

// function insertSort(arr){
//     let n = arr.length

//     for(let i=0;i<n;i++){
//         let temp = arr[i]
//         let j = i-1

//         while(j>=0 && arr[j]>temp){
//               arr[j+1] = arr[j]
//               j--
//         }
//         arr[j+1] = temp

//     }
//     return arr
// }