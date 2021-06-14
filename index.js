
function deleteVowels(str){
    let listLeter = ['а', 'у', 'о', 'ы', 'и', 'э', 'я', 'ю', 'ё', 'е']
    return str
    .split(' ')
    .map(item => item
        .split('')
        .filter(item => !listLeter.includes(item.toLowerCase()))
        .join(''))
    .join(' ')
}

console.log(deleteVowels('Лол поп КОт Денс! Денис афанасий'))