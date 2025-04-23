function bubbleSort(arr){
    let n = arr.length 
    for(let i=0 ; i<n-1;i++){
        let swapped = false
        for(let j=0;j<n-1-i;j++){
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


console.log(bubbleSort([9,7,6,5,4,3,2]));

// function bubbleSort(arr){
//     let swapped = false
//     let n = arr.length
//     for(let  i=0;i<n-1;i++){
//         for(let j=0;j<n-1-i;j++){
//             if(arr[j]>arr[j+1]){
//                 let temp = arr[j]
//                 arr[j] = arr[j+1]
//                 arr[j+1] = temp
//             swapped = true
//             }
//         }
//         if(swapped === false)
//             break

//     }
//     return arr

// }

// console.log(bubbleSort([6,4,3,2,1]));// function bubbleSort(arr){
//     let flag = 0
//     for(let i=0;i<arr.length-1;i++){
//         for(let j=0;j<arr.length-1-i;j++){
//             if(arr[j]>arr[j+1]){
//                 let temp = arr[j]
//                 arr[j] = arr[j+1]
//                 arr[j+1] = temp
//                  flag = 1
//             }
//         }
//         if(flag === 0)
//         break
//     }
//     return arr
// }
// console.log(bubbleSort([6,2,1,4,9]));

function bubbleSort(arr){
    let n = arr.length
    let swapped = false

    for(let i=0;i<n-1;i++){
        for(let j=0;j<n-1-i;j++){
            if(arr[j]>arr[j+1]){
            let temp = arr[j]
            arr[j]=arr[j+1]
            arr[j+1] = temp
            swapped = true

            }


        }
        if(!swapped)
            break
    }
    return arr
}

console.log(bubbleSort([9,8,7,6,5,4]));
