// Ваша задача - реализовать функцию transform(arr), которая принимает массив и возвращает преобразованный массив на основе управляющих последовательностей, 
//содержащихся в arr. Управляющие последовательности - это определенные строковые элементы указанного массива:

// --discard-next исключает следующий элемент массива из преобразованного массива.
// --discard-prev исключает предыдущий элемент массива из преобразованного массива.
// --double-next удваивает следующий элемент массива в преобразованном массиве.
// --double-prev удваивает предыдущий элемент массива в преобразованном массиве.

const transform = (arr)=> {
    const arrMethods = ['--discard-next', '--discard-prev','--double-next', '--double-prev']
    let method = arr.filter(item=>arrMethods.includes(item)).join('')
    switch (method){
        case '--discard-next':arr.splice(arr.indexOf(method),2);return arr;
        case '--discard-prev':arr.splice(arr.indexOf(method)-1,2);return arr;
        case '--double-next':arr.splice(arr.indexOf(method),1,arr[arr.indexOf(method)+1]);return arr;
        case '--double-prev':arr.splice(arr.indexOf(method),1,arr[arr.indexOf(method)-1]);return arr;
        default: return 'нет методов'
    }
}

console.log(transform([1, 3, '--discard-next', 4]))
console.log(transform([1, 3, '--discard-prev', 4]))
console.log(transform([1, 3, '--double-next', 4]))
console.log(transform([1, 3, '--double-prev', 4]))
console.log(transform([1, 3, 4]))

