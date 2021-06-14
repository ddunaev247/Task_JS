// Ваша задача написать функцию, которая принимает в качестве параметра строку и увеличивает каждую "букву" строки на число позиции, которую она занимает.
// Например:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

function accum(str){
    return str
    .split('')
    .map((item,index)  => item.toUpperCase()+item.toLowerCase().repeat(index))
    .join('-')
}
console.log(accum("RqaEzty"))