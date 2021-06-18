//Функция simple, в качестве параметра принимающая строку слов, возвращает длину самого короткого слова.
//Строка никогда не будет пустой, и вам не нужно учитывать разные типы данных.

function simple(str){
    result = str.split(' ').map(item => item.length).sort((a,b) => a-b)
    return result[0]
}

console.log(simple('один два три четыре'))