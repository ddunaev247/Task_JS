let createDreamTeam = (members) => {

let result = members.filter(item => typeof item === 'string')
return  result.length > 0 && result
    .map(item => item[0]).sort((a,b) => a.localeCompare(b))
    .join('')
}

console.log(createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]))
console.log(createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']))