'use strict'

const mergeArray = (array) => {
  let a = array.concat()
  for (let i = 0; i < a.length; ++i) {
    for (let j = i + 1; j < a.length; ++j) {
      if (a[i] === a[j]) a.splice(j--, 1)
    }
  }
  return a
}

let numArray = []

for (let i = 0; i < 1000; i++) { numArray[i] = i }

let threeMultArr = numArray.filter((x) => !(x % 3))

let fiveMultArr = numArray.filter((x) => !(x % 5))

let threeAndFiveMultArr = mergeArray(threeMultArr.concat(fiveMultArr))

console.log(threeAndFiveMultArr.reduce((prev, curr) => prev + curr))
