const prompt = require('prompt-sync')()

// let groceries = ['milk', 'egg', 'frostedflakes', 'salami', 'juice']
// console.log(groceries)

// let arr = [1, [11, 12], 3, 4]
// console.log(arr[1][0])

// //section one
// let arr = []
// let sum = 0
//     for(i=0;i<3;i++){
//     let n = Number(prompt(`pick a number: `))
//     arr.push(n)
//     console.log(arr)
//     }

//     for(i=0; i< arr.length; i++){
//         sum += arr[i]
//     }
// console.log(sum)

// //fibonacci sequence
// let fib = [0, 1]
// let num = Number(prompt("How much of the fib do you want to see?: "))
// if (num == 0) {
//     console.log("okay then...")
// } else if (num == 1) {
//     console.log("[ 0 ]")
// } else {
//     for (let i = 2; i < num; i++) {
//         fib[i] = fib[i - 1] + fib[i - 2]
//     }
//     console.log(fib)
// }

function remove() {
    let quit = false
    let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    console.log(arr)
    while (quit == false) {
        r = prompt(`choose a number to get rid of. Type quit to exit: `)
        let num = arr.indexOf(Number(r))
        if (num !== -1) {
            arr.splice(num, 1)
            console.log(arr)
        } else if (num == 1 && r !== "quit") {
            console.log("\nSorry but that number isn't there.")
            console.log(arr)
        }
        if (r == "quit") {
            console.log("\nGoodbye")
            quit = true
        }
    }
}
// remove()

function add() {
    let arr = ['dog', 'cat', 'fish', 'hamster', 'tiger', 'snake']
    console.log(arr)
    let a = prompt(`Pick an animal to add to the list: `)
    let n = Number(prompt(`pick the position to place it in. 0-6: `))
    let word = arr.indexOf(a)
    if (a) {
        arr.splice(n, 0, a)
    }
    console.log(arr)
}
// add()

function list() {
    let arr = []
    let quit = false
    let n = Number(prompt(`how many grocery items do you have?: `))
    for (let i = 0; i < n; i++) {
        let l = prompt(`List what you need on the list: `)
        l = l.toLowerCase()
        arr.splice(i, 0, l)
    }
    console.log(arr)
    while (quit == false) {
        let w = prompt(`Search for any item on the list. Type quit to exit: `)
        w = w.toLowerCase()
        arr.indexOf(w)
        if (arr.indexOf(w) == -1) {
            console.log(`Not found`)
        } else {
            console.log(`Found`)
        }
        if (w == "quit") {
            console.log("Goodbye")
            quit = true
        }
    }
}

// list()

//Grocery list manager
function completeList() {
    let arr = []
    let quit = false
    let back = false
    let n = Number(prompt("Select a mode. \n1. Add grocery items.\n2. Search grocery items\n3. Remove grocery items.\n4. Exit program.: "))
    while (quit == false) {
        if (n == 4) {
            console.log("Goodbye")
            quit = true
        } else if (n == 1) {
            back = false
            while (back == false) {
                let add = prompt(`What would you like on the list? Type "back" to return to selecion menu: `)
                add = add.toLowerCase()
                if (add == "back") {
                    back = true
                } else if (arr.indexOf(add) !== -1) {
                    console.log("Item is already on the list.")
                    console.log(arr)
                } else {
                    arr.push(add)
                }
            }
        } else if (n == 2) {
            back = false
            if (arr.length == 0) {
                console.log("There aren't any items on the list yet...")
                back = true
            }
            while (back == false) {
                let search = prompt(`What item would you like to search for? Type "back" to return to the selection menu: `)
                search = search.toLowerCase()
                if (search == "back") {
                    back = true
                }
                if (arr.indexOf(search) === -1) {
                    console.log("That is not on the list.")
                } else {
                    console.log("Found on the list.")
                }
            }
        } else if (n == 3) {
            back = false
            if (arr.length == 0) {
                console.log("There aren't any items on the list yet...")
                back = true
            }
            while (back == false) {
                let remove = prompt(`What would you like removed from the list? Type "back" to return to the menu: `)
                remove = remove.toLowerCase()
                if (remove == "back") {
                    back = true
                }
                if (arr.indexOf(remove) === -1) {
                    console.log("Thats not on the list...")
                    console.log(arr)
                } else {
                    arr.splice(remove, 1)
                    console.log(arr)
                }
            }
        }
    }
}

completeList()