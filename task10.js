
function findNeedle(arr){
if (arr.includes("needle")){
    return `Нашел иголку на позиции ${arr.indexOf("needle")}`  
    }
return `Иголки нет`
}

console.log(findNeedle(["bla","wekmvever","needle","bntyn","qwd","qfverv","rtbrtb"]))
console.log(findNeedle(["bla","wekmvever","bntyn","qwd","qfverv","rtbrtb"]))