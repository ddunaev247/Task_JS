// Банкоматы допускают 4 или 6-значные ПИН-коды, а ПИН-коды не могут содержать ничего, кроме 4 цифр или 6 цифр.
// Если функции передана правильная строка PIN, верните true, иначе верните false.

function correctPin(str){
    if ((str.length===4 || str.length===6) && !str.split('').map(item=>isFinite(item)).includes(false))
        return true
    return false
}

console.log(correctPin('5545'))
console.log(correctPin('46ee'))
