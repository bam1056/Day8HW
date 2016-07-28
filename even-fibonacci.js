'use strict'

let fibArray = [1, 2]

let count = 0

let fibNum = fibArray[0]

while (fibNum < 4000000) {
  fibNum = fibArray[count] + fibArray[count + 1]

  fibArray.push(fibNum)

  count++
}

fibArray.pop()

let fibEven = fibArray.filter((n) => !(n % 2))

console.log(fibEven.reduce((prev, curr) => prev + curr))
