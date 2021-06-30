//Ваша задача - преобразовать строки в то, как они были бы написаны Джейденом Смитом. 
//Строки являются реальными цитатами из Jaden Smith, но они не написаны с большой буквы так, как он их первоначально напечатал.

String.prototype.toJadenCase = function(){ 
    return this.split(' ').map(item => item.split('').map((item,index)=>index===0?item.toUpperCase():item).join('')).join(' ')
}
console.log('The world is not what we think it is'.toJadenCase())
    
