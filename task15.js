
const filterStr = (str) => str
.split(' ')
.sort((a,b) => a.split('').filter(item => isFinite(item)) - b.split('').filter(item => isFinite(item)))
.join(' ')

console.log(filterStr('is2 Thi1s T4est 3a'))