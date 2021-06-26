//Напишите функцию cutString(str, n), которая удаляет лишние слова из строки str, оставив в ней n слов.

const cutString = (str, n) => {
    result = str.split(' ')
    if (Number.isInteger(n) && 0<=n){
        result.length = n
        return result.join(' ')
    }
    return 'ошибка в параметре "количество слов"'
}
console.log(cutString('Сила тяжести приложена к центру масс тела', 5))