// Банкоматы допускают 4 или 6-значные ПИН-коды, а ПИН-коды не могут содержать ничего, кроме 4 цифр или 6 цифр.
// Если функции передана правильная строка PIN, верните true, иначе верните false.

function correctPin(str){
    if (str.length===4 || str.length===6)
        return true
    return false
}

console.log(correctPin('4645'))
console.log(correctPin('46'))
console.log(correctPin('465577'))