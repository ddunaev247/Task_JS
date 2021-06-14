

function checkChar(string){
    let listLeter = ['а', 'у', 'о', 'ы', 'и', 'э', 'я', 'ю', 'ё', 'е']
    return string
    .split('')
    .filter(item => !listLeter.includes(item.toLowerCase()))
    .join('')
}

function deleteVowels(str){
    return str
    .split(' ')
    .map(item => checkChar(item))
    .join(' ')
}

console.log(checkChar('Лол'))
console.log(deleteVowels('Лол поп КОт Денс! Денис афанасий'))