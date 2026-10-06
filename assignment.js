const prompt = require('prompt-sync')()

function maxNum(...num) {
    let result = -Infinity
    for(let number of num){
        if(number > result){
            result = number
        }
    }
    return result
}
console.log(maxNum(10, 41, 20, -12, -42))


function reverse(){
    let num = prompt(`give me a number: `)
    if(num !== null){
        let turned = num.split('').reverse().join('') //just seperating, reversing, then puts them back together.
        console.log(turned)
    }
}
// reverse()

/* function(words){
    return sentence
} 
(words)=>{
    return sentence
}    
    They are the same thing.  => is the same meaning as "becomes" or "runs this code"
*/
// uppercase letters A-Z are 65 to 90
// lowercase letters a-z are 97 to 122


function upperCase(){
    let sentence = prompt(`type anything lowercase and i'll turn it into uppercase: `)
    return sentence.split('').map(char =>{ // This loops through every single character in that new array. It takes one character at a time calling it char. .map just grabs everything in the array.
        let code = char.charCodeAt(0) // This looks up the unicode number of that specific character. The 0 means "look at the first position" of that single character.

        if(code >= 97 && code <=122){
            return String.fromCharCode(code - 32) //.fromCharCode takes a number and turns it back into a text character. also if "a" which is 97, -32 is 65, which is "A" same goes with the rest of the letters.
        }
        return char
    }).join('') // and then finally puts them together
}

// console.log(upperCase())

function invertsCase(){
    let sentence = prompt(`type anything lowercase and i'll turn it into uppercase: `)
    return sentence.split('').map(char =>{
        let code = char.charCodeAt(0)
        if(code >= 65 && code <=90){
            return String.fromCharCode(code + 32)
        }
        if(code >= 97 && code <=122){
            return String.fromCharCode(code - 32)
        }
        return char
    }).join('') // and then finally puts them together
}

console.log(invertsCase())