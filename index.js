// Тролли атакуют ваш раздел комментариев!
// Распространенный способ справиться с этой ситуацией - убрать все гласные из комментариев троллей, нейтрализуя угрозу.
// Ваша задача - написать функцию, которая принимает строку и возвращает новую строку со всеми удаленными гласными.

function checkChar(string){
    let str = string.split('')
    let newString = []
    let listLeter = ['а', 'у', 'о', 'ы', 'и', 'э', 'я', 'ю', 'ё', 'е']
    for (let i of str){
        if (!listLeter.includes(i)){
            newString.push(i)
        }
    }
    return newString.join('')
}

function deleteVowels(str) {
    let listString = str.split(' ')
    let resulListtSting = []
    for (let i of listString){
        resulListtSting.push(checkChar(i))
    }
    return resulListtSting.join(' ')
}

console.log(deleteVowels('Лол поп Кот Денс!'))