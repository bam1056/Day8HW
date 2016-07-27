'use strict'

/**
 * For each of the following Array methods,

 * 1. use them in an example
 * 2. use console.log() to make the code run in the console!

 **/
const numArray = [3, 23, 17, 4, 9]
const strArray = ['my', 'name', 'is', 'Brett', 'thank', 'Alphabetically', 'you']
const string = 'this is an example of a string'
console.log(numArray, strArray)

// .sort()
// ------------------
// ~ALPHABETICALLY
// ------------------
console.log(strArray.sort())
console.log('The values stored in strArray after SORT is now: ' + strArray)

// ------------------
// ASCENDING NUMERIC
// ------------------
console.log(numArray.sort((a, b) => a - b))
console.log('The values stored in numArray after SORT is now: ' + numArray)

// .concat()
console.log(numArray.concat(strArray))
console.log('The values stored in numArray after CONCAT is still: ' + numArray)

// .indexOf()
console.log(numArray.indexOf(23))

console.log(numArray.indexOf(0))

console.log(strArray.indexOf('Brett'))

// .split()
console.log('\nThis is the first string: ' + string)
let newString = string.toUpperCase()
console.log('\nThis is the string split into a new array of strings: \n\n' + newString.split(' '))

// .join()
console.log('\nThis is strArray joined with space between elements: \n\n' + strArray.join(' '))

// .pop()
console.log('The method pop() removes the last element of strArray which is the word: ' + strArray.pop())

// .push()
strArray.push('YOU')
console.log('Where arr.pop("you") removes the last element in the array, arr.push("YOU") adds it. See? \n\n' + strArray)

// .slice()
console.log(strArray.slice(3))
console.log(strArray)

// .splice()
console.log(strArray.splice(2, 1, 'lollipop'))
console.log(strArray)

// .shift()
console.log('Shift removes the 0th element of the array and returns that value. In this case the word is: ' + strArray.shift())
console.log('The array is modified and strArray now looks like this: ' + strArray)

// .unshift()
strArray.unshift('dog', 'bone')
console.log("Unshift() adds elements onto the front of an array and returns the value of the new array length.\n\
If I call unshift() with 'dog' and 'bone' as arguments, the strArray will now look like this: \n\n" + strArray)

console.log('\nand the function returns the new array length: ' + strArray.unshift())
// .filter()

// .map()
