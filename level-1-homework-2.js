/* 1) Given an array of numbers which is almost sorted in ascending order.  Find the index
where sorting order is violated. */

function ascendingArray (array) {
    for (let i = 0; i < array.length; i++) {
            if (array[i] > array[i + 1]) {
                return [i + 1]
            }    
    }
    return -1
}

/* 2) Given an array consisting from the arrays of numbers (like a two-dimensional array).
Find sum of each row and print them as an array */

function sumOfArrayElement(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        let sum = 0
        for (let j = 0; j < arr[i].length; j++) {
            sum += arr[i][j] 
            newArr[i] = sum
        }
    }
    return newArr
}



/* 3) Given an array of integers. Write a function that return new array from first array,
where removed even numbers, and odd numbers was multiplied with new array length */

function evenArray(arr){
  let evArray = arr.filter(function(el) {
    return el % 2 !== 0
  })
    evArray.forEach(function (val,i) {
      evArray[i] *= evArray.length
  })
  return evArray
}

/* 4) Given a number. Write a function that calculates its sum of the digits and if that sum
has more than 1 digit find the sum of digits of that number. Repeat that process if needed and
return the result */

function sum(num) {
    let result = 0
    str = num + "" 
    arr = str.split("")
    for (let i = 0; i < arr.length; i++) {
        result += +arr[i]
    }
    if(result <= 9){
        return result
    } else {
        return sum(result)
    }
}


/* 5) Write a recursive function which receives  a number as arguments and returns the
fibonacci sequence as array */

function fibonacci(num) {
   let arr
   if(num === 0){
       arr = []
   } else if (num === 1){
       arr = [0]
   } else if (num === 2){
       arr = [0,1]
   } else {
        arr = [0,1]
        for(let i = 2; i < num; i++){
            arr[i] = arr[i-1] + arr[i-2]
        }
   }
    return arr
}


