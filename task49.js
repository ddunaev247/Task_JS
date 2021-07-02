//Найдите недостающую букву.

//Напишите функцию, которая принимает в качестве параметра массив букв, 
//расположенных по алфавиту и возвращает массив с недостающей буквой. Длина входного массива не меньше 2 и он содержит буквы только одного регистра.

//Например:
//findMissingLetter(['a','b','c','d','f']) -> 'e'

const findMissingLetter = arr => {
    let result = []
    result = arr.map(item=>item.codePointAt(0)).filter((item,index,array)=>2<=array[index+1]-item).map(item=>String.fromCodePoint(item+1))
    return result
}
console.log(findMissingLetter(['a','b','c','d','f']))