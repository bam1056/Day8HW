'use strict'

/**
 * For each of the following Array methods,

 * 1. use them in an example
 * 2. use console.log() to make the code run in the console!

 **/
const numArray = [3, 23, 17, 4, 9]
const strArray = ['my', 'name', 'is', 'Brett', 'thank', 'Alphabetically', 'you']
const string = 'this is an example of a string'

// .sort()
// ------------------
// ~ALPHABETICALLY
// ------------------
console.log('If sort() is called on an array of strings with no compare function, the values stored in strArray after SORT will be mutated alphabetically like so: \n\n' + strArray.sort())

console.log('\nRemember that capital letters will receive president, so it might be best to convert a string to all lower or all upper case before sorting alphabetically.')

// ------------------
// ASCENDING NUMERIC
// ------------------
console.log('When sort() is called with a compare function of (a-b), the function mutates the array in ascending order as such: \n\n' + numArray.sort((a, b) => a - b))

// .concat()
console.log('\nWhen concat() is called, a new array is produced that contains the array on which it is called joined with the arrays passed as arguments: \n\n' + numArray.concat(strArray))

// .indexOf()
console.log('When called, indexOf() returns the value of the index of the item searched for. \n\n')
console.log('The array index of the number 23 in numArray is' + '[' + numArray.indexOf(23) + ']\n\n')

console.log('\nIf the element searched for does not exist in the array, indexOf() will return ' + numArray.indexOf(0))

console.log('\nIt works on strings too. This is the index of the word Brett in the strArray: ' + strArray.indexOf('Brett'))

// .split()
console.log('\nGiven a string: ' + string)
let newString = string.toUpperCase()
console.log('\nThis is the string split into a new array of strings by using the split() function which acts on strings: \n\n' + newString.split(' '))

// .join()
console.log('\nThis is strArray joined with space between elements: \n\n' + strArray.join(' '))

// .pop()
console.log('\n\nThe method pop() removes the last element of strArray which is the word: ' + strArray.pop())

// .push()
strArray.push('YOU')
console.log('\nWhere arr.pop("you") removes the last element in the array, arr.push("YOU") adds it. See? \n\n' + strArray)

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
console.log("Unshift() adds elements onto the front of an array and returns the value of the new array length.\nIf I call unshift() with 'dog' and 'bone' as arguments, the strArray will now look like this: \n\n" + strArray)

console.log('\nand the function returns the new array length: ' + strArray.unshift())
// .filter()
console.log('\n\nThe filter function will produce an array of elements that pass the test function.\nIn this case I am filtering for numbers in numArray less than 10 which outputs: ' + numArray.filter((x) => x < 10))

// .map()
console.log('\n\nThe map() function will execute a function call on each element in an array and return an array of the values returned from the callback function. If I pass the square root function as an argument to map, a new array will be created that contains the square roots of every element in the array map is called upon. \n\n' + numArray.map(Math.sqrt))
