// function reverce(word){
//     return word.split('').reverse().join('')
// }
// console.log(reverce('anshida'));


// function countVowels(str){
//     let count = 0
//     let vowles = 'aeiouAEIOU'

//     for(let char of str){
//         if(vowles.includes(char)){
//             count++
//         }
//     }
//     return count
// }


// console.log(countVowels('international'));

// function palindrome(str){

//     let reverce = str.split('').reverse().join('')
//     if(reverce === str){
//         return true
//     }
//     return false
    
// }
// console.log(palindrome('malayalam'));


// function factorial(n){
//     if(n===0 || n==1)return 1
//     return n*factorial(n-1)
// }
// console.log(factorial(5));



// function fibnacci(n){
//     if(n===0) return 0
//     if(n===1)return 1

//     return fibnacci(n-1) + fibnacci(n-2)
// }
// console.log(fibnacci(4));


// function sumOfdigits(num){
//     if(num===0)return 0
//     return (num%10) +sumOfdigits(Math.floor(num/10))
// }


// console.log(sumOfdigits(5123));


// function palindrome(str,left=0,right=str.length-1){
//     if(left>=right)return true
//     if(str[left] !== str[right])return false
//     return palindrome(str , left+1 , right-1)


// }
// console.log(palindrome('madam'));

// //  function reverce(n){
// //     if(n==='')return''
// //     return reverce(n.slice(1))+n[0]

// //  }

//  console.log(reverce('anshida'));


//  function power(a,b){
//     if(b===0)return 1
//     return a*power(a,b-1)
//  }
// console.log(power(2,3));


// function oneton(n){

//     if(n===0)return
//     console.log(n);

//     oneton(n-1)
    

// }
// oneton(5)


// function reverse(n){
//     if(n === '')return ''
//     return reverse(n.slice(1))+n[0]
// }

// console.log(reverse('friedrice'));

// function fibnacci(n){
// if(n===0)return 0
// if(n===1)return 1
//     return fibnacci(n-1) + fibnacci(n-2)
// }

// console.log(fibnacci(3));

// function palindrome(str,left = 0, right = str.length-1){


//     if(left>=right)return true
//     if(str[left] !== str[right])return false
//     return palindrome(str,left+1, right-1)



//     }

//     console.log(palindrome('anshida'));


// function removeChar(str,removeCharacter){
//     if(str.length === 0){
//         return ''
//     }

//     const firstChar = str[0]
//     const remainingChar=str.slice(1)

//     if(firstChar === removeCharacter){
//         return removeChar(remainingChar,removeCharacter)
//     }else{
//         return firstChar + removeChar(remainingChar,removeCharacter)
//     }
// }

// console.log(removeChar('anshida','i'));