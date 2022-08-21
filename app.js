
// var user = 'aliraza'
// console.log(user.lastIndexOf('a'))
// console.log(user.length-1)
// console.log(user.charAt(4))


// function combination(){
//     var user = prompt("enter any number");
//     var result="";
//     for (let i = 0; i <user.length; i++) {
//         result = result+=user[i]
//         document.write(`${result}<br>`)
//     }
// }
// combination()


// function reverse() {
//     var user = prompt("enter any number");
//     var result="";
//     for (let i = user.length-1; i >=0; i--) {
//         result=user[i]
//         document.write(${result}<br>)
//     }

// }
// reverse()


// function palindrom() {
//     var user = prompt("enter the word")
//     word = ''

//     for (let i = user.length - 1; i >= 0; i--) {
//         word += user[i]

//     }
//     if (!isNaN(user)) {
//         document.write("please enter alphabets not a number")
//     }
//     else if (word == user) {
//         document.write(`${word} is palindrom word `)
//     }
//     else {
//         document.write("its not a palindrom word")
//     }
// }
// palindrom()


// function order() {
    
//     var user = prompt("enter the word")
//     var order =user.split('').sort().join('')
//     if (isNaN(user)) {
//         document.write(order)
//     }
//     else{
//         document.write("please enter alphabets not number")
//     }
// }
// order()


// var smyarr =arr[0].charAt(0).toUpperCase()
// console.log(smyarr)

// function capital(){


//     var str = 'the quick brown fox jumps over the lazy dog'
//     var arr = str.split(' ')

//     var final = []
//     for (let i = 0; i < arr.length; i++) {
//          final.push(arr[i].charAt(0).toUpperCase()+arr[i].slice(1))
//     }

//    return final.join(' ')
    
// }

// console.log(capital())


// function vowels(str) {
//     var count=0
//     var vowels = ['a','e','i','o','u'];
//     for (let i = 0; i < str.length; i++) {
//         for (let j = 0; j < vowels.length; j++) {
//             if (str[i] == vowels[j]) {
//                 count++
//             } 
//         }
//     }
//     return count
// }
// var user = prompt("enter any sentence")
// console.log("total vowels in this sentence is " + vowels( user))

// pending***********************************************************************
// function prime(user) {
    
//         if (user %  === 1) {
    //             console.log("its prime number")
    //         }
    //         else{
        //             console.log("its not a prime number")
        //         }
        
// }
// var user = +prompt("enter the number")
// prime(user)
 // pending***********************************************************************

//  function longest(str) {
//    var word = str.split(" ");
//    var maxlenght = 0
//    var final = ''
// for (let i = 0; i < word.length; i++) {
//    if (word[i].length > maxlenght) {
//     maxlenght = word[i].length
    
//    }
    
// }

// return maxlenght
//  }
// console.log( longest("i am aliraza and you"))

// function type(val) {
//    if (typeof val === "object") {
//       console.log('its a object')
//    }
//    else if(typeof val === 'number'){
//       console.log("its a number")
//    }
//    else if(typeof val === 'string'){
//       console.log("its a string")
//    }
//    else if(typeof val === 'boolean'){
//       console.log('its a boolean')
//    }
//    else{
//       console.log('please enter correct data type')
//    }
// }
// type(true)

// var arr = [9,7,8,4,6,3,2,5,1]
// arr.sort()
// console.log(arr.length-1 + ' '+ arr[1])

// function findLongestWord(str) {
//     var long = str.split(" ");
//    var longestWord = long.sort(function(a,b) {
//        return b.length - a.length;
       
    
//    })
//    console.log(longestWord[0]);
// }
// findLongestWord("Hi this is an apple")

// https://docs.google.com/forms/d/e/1FAIpQLScw5a3mqkz8LhVslSBdP-BMcZF_sJNZiSF_f9ErS4OcjNVhyQ/viewform?usp=sf_link