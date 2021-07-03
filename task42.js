//Дан массив слов, необходимо определить, составлены ли все слова из одних и тех же символов.
// Функци. реализовать как принимающую переменное число аргументов.

const checkIdentElem = arr => {
    check = arr
        .map(item=>item.split('').sort((a,b)=>a.codePointAt(0)-b.codePointAt(0))
        .join(''))
        .filter((item,index,array)=>item!==array[index+1]&&array[index+1]!==undefined)
    return 0<check.length?false:true

}

console.log(checkIdentElem(["кот", "ток", "кто"]))
console.log(checkIdentElem(["кот", "ток", "гто"]))