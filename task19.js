
const countCats = (...arr) => arr
    .flat(Infinity)
    .filter((item)=> item === "^^")
    .length


console.log(countCats([0,1,"^^"],[9,"^^",2],["^^",8,7],["^^",8,"^^"]))