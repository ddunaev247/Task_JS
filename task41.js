//Напишите функцию, которая возвращает сумму таким образом: f(1)(2)(3) - 6


function sumator(num) {

    let sum = num
  
    function sumNext(numNext) {
        sum += numNext
    return sumNext
    }
  
    sumNext.toString = function() {
      return sum
    }
    
    return sumNext
  }

console.log( sumator(1)(2)(3).toString())