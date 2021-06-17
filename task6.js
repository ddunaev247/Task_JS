//Вы должны написать функцию printer_error, которая для данной строки будет выводить коэффициент ошибок принтера в виде строки, представляющей рациональное число,
// числитель которого равен числу ошибок, а знаменатель - длине управляющей строки. Не уменьшайте эту дробь до более простого выражения.
//Строка имеет длину, большую или равную единице, и содержит только буквы от a до z.


function printer_error(str){
  if (str.length!=0){
    let listErr = str.split('').filter(item => item>'m')
    return `${listErr.length}/${str.length}`
  }
  return 'пустая строка'
}

console.log(printer_error('aaabbbbhaijjjm'))
console.log(printer_error('aaaxbbbbyyhwawiwjjjwwm'))